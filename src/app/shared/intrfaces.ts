export interface User {
  email: string;
  password: string;
}

export interface Contact {
  department?: number;
  description: string;
  email: string;
  enquiry_type: string;
  file?: string;
  subject: string;
  user_name: string;
}
