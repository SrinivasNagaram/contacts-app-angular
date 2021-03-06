import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {

  @Input() user: User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();
  userExists: boolean;

  constructor() { }

  ngOnInit(): void {
    if (!this.user) {
      // the user obj has no value
      // this means that no user object was passed in
      this.userExists = false;
      this.user = new User();
    } else {
      // the user object was passed in
      this.userExists = true;
    }
  }

  onFormSubmit(form: NgForm): any {
    console.log(form);
    if (form.valid) {
      this.formSubmit.emit(form.value);
    }
  }
}
