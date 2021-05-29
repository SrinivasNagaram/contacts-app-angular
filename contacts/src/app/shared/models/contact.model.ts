export class Contact {
  constructor(
    public name: string,
    public phoneNumber: string,
    public email: string,
    public notes?: string,
    // tslint:disable-next-line: variable-name
    public _id?: string
  ) { }
}

export class List {
  _id: string;
  title: string;
}
