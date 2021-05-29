import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { WebReqService } from 'src/app/shared/services/web-req.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();

  constructor(private webService: WebReqService, private authService: AuthService, private router: Router) { }

  ngOnInit(): any {
    this.user = this.authService.getUserDetails();

    if (!this.authService.isLoggedIn()) {
      // the user isn't logged in
      this.router.navigateByUrl('/login');
    }
  }

  saveUserDetails(userDetails: User): any {
    console.log('Saving user details...');
    console.log(userDetails);
    console.log('User Id:', this.user._id);
    this.webService.patch(`/users/${this.user._id}`, userDetails).subscribe(() => {
      console.log('User details have been updated');
      this.authService.setUserDetails(userDetails.name, userDetails.email);
    });
  }

  logout(): any {
    this.authService.logout();
  }


}
