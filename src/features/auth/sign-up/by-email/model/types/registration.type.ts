export interface RegisterParamsByEmail {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegistrationFormFields extends RegisterParamsByEmail {
  acceptTerms: boolean;
}
