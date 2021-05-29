export class User {
  // tslint:disable-next-line: variable-name
  _id: string;
  name: string;
  email: string;

  // PASSWORD SHOULDN'T BE STORED IN THE MODEL (only for use on the signup page)
  password?: string;
}
