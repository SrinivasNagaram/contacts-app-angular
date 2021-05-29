import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm): any {
    console.log(form);
    if (form.valid) {
      this.authService.login(form.value.email, form.value.password).subscribe((res: HttpResponse<any>) => {
        console.log(res);
        this.router.navigateByUrl('/');
      });
    }
  }
}
