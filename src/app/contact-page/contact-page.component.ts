import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../shared/services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  typesSub: Subscription;
  types: string[];
  form: FormGroup;
  other: boolean;
  selectValue;
  textareaLength = 0;
  textareaMaxLength = 1000;
  isUploadImg = false;
  uploadError = '';
  message = null;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.typesSub = this.contactService.getTypes().subscribe(
      response => {
        if (response.success) {
          this.types = response.data;
        }
      },
      error => {
        console.log(error);
      }
    );

    this.form = new FormGroup({
      enquiryType: new FormControl(null, [Validators.required]),
      other: new FormControl(),
      userName: new FormControl(null, [Validators.required]),
      userEmail: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      fileImg: new FormControl()
    });

    this.calcLength();
  }

  ngOnDestroy() {
    if (this.typesSub) {
      this.typesSub.unsubscribe();
    }
  }

  changeSelect() {
    this.selectValue = this.form.value.enquiryType;
    this.other = this.selectValue.name === 'Other' ? true : false;
  }

  calcLength() {
    if (this.form.get('description').value) {
      this.textareaLength = this.form.get('description').value.length;
    } else {
      this.textareaLength = 0;
    }
  }

  openFile(e, preview) {
    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();
      img.src = reader.result;
      if (e.target.files[0].type.indexOf('image') === -1) {
        e.target.value = '';
        this.isUploadImg = false;
        preview.src = '';
        this.uploadError = 'This is not a picture';
        console.log(this.uploadError);
      } else {
        img.onload = () => {
          if (e.target.files[0].size > 5242880) {
            e.target.value = '';
            this.isUploadImg = false;
            preview.src = '';
            this.uploadError = 'Maximum size of the uploaded image should not exceed 5MB';
          } else if (img.width > 300 || img.height > 300) {
            e.target.value = '';
            this.isUploadImg = false;
            preview.src = '';
            this.uploadError = 'Uploaded image should not exceed 300x300 pixels';
          } else {
            this.uploadError = '';
            preview.src = reader.result;
            this.isUploadImg = true;
            this.form.patchValue({
              // fileImg: reader.result
              fileImg: e.target.files[0]
            });
          }
        };
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  }

  onSubmit() {
    const formData = this.form.controls;
    const otherValue = formData.other.value ? formData.other.value : 'Other';
    const contact = {
      description: formData.description.value,
      email: formData.userEmail.value,
      enquiry_type: this.other ? otherValue : formData.enquiryType.value.name,
      file: formData.fileImg.value,
      subject: formData.subject.value,
      user_name: formData.userName.value
    };
    this.form.disable();
    this.contactService.send(contact).subscribe(response => {
      if (response.success) {
        this.showMsg(response.data.message);
      } else {
        this.showMsg(response.success);
      }
    },
    (error) => {
      this.showMsg(error.error.error.description);
    });
  }

  showMsg(msg: string) {
    this.message = msg;
    setTimeout(() => {
      this.message = null;
      this.form.enable();
    }, 10000);
  }
}
