import { CategoriesService } from '../shared/services/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicePageComponent implements OnInit, OnDestroy {
  categories;
  categoriesSub: Subscription;
  authSub: Subscription;
  showLoader = true;
  errorMessage = null;

  /**
   * Т.к. страницы авторизации нет, эмулируем запрос авторизации для получение токена
   */
  user = {
    email: 'test@abz.agency',
    password: '123456'
  };

  constructor(
    private authService: AuthService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit() {
    this.authSub = this.authService.login(this.user).subscribe(response => {
      if (response.success && response.data.token) {
        this.categoriesSub = this.categoriesService
          .getCategories()
          .subscribe(res => {
            if (res.success) {
              this.showLoader = true;
              this.categories = res.data;
              this.showLoader = false;
            }
          },
          (error) => {
            this.showLoader = false;
            this.showErrorMsg(error.error.error.description);
          });
      }
    },
    (error) => {
      this.showLoader = false;
      this.showErrorMsg(error.error.error.description);
    });
  }

  ngOnDestroy() {
    if (this.categoriesSub) {
      this.categoriesSub.unsubscribe();
    }
    if (this.authSub) {
      this.authSub.unsubscribe();
    }
  }

  showErrorMsg(msg: string) {
    this.errorMessage = msg;
    setTimeout(() => {
      this.errorMessage = null;
    }, 5000);
  }
}
