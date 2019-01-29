export class User {

  firstName:  string;
  lastName: string;
  email:   string;
  dob: Date;
  password: string;
  mobileNumber: string;
  address1: string;
  address2: string;
  county: string;
  city: string;
  state: string;
  country: string;
  skills: string;
  licenseNumber: string;
  files: string;
  limitations: string;
  pushNotification: string;
  salt: string;
  token: string;
  role: string;

  constructor(values: Object = {}) {
      /*Constructor initialization*/
      Object.assign(this, values);
  }
}
