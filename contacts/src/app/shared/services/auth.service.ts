import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { shareReplay, tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private webService: WebReqService, private http: HttpClient, private router: Router) { }

  login(email: string, password: string): any {
    return this.http.post(`${this.webService.ROOT_URL}/users/login`, {
      email,
      password
    }, {
      observe: 'response'
    }).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        // the auth tokens will be in the header of this response
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        this.setUserDetails(res.body.name, res.body.email);
        this.router.navigateByUrl('/contacts');
        console.log('Successfully logged in');
      })
    );
  }

  signup(name: string, email: string, password: string): any {
    return this.http.post(`${this.webService.ROOT_URL}/users`, {
      name,
      email,
      password
    }, {
      observe: 'response'
    }).pipe(
      shareReplay(),
      tap((res: HttpResponse<any>) => {
        this.setSession(res.body._id, res.headers.get('x-access-token'), res.headers.get('x-refresh-token'));
        this.setUserDetails(res.body.name, res.body.email);
        console.log('Signed up (and logged in) successfully');
      })
    );
  }

  getUserDetails(): User {
    // tslint:disable-next-line: variable-name
    const _id = localStorage.getItem('userId');
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    return { _id, name, email };
  }

  getAccessToken(): any {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken(): any {
    return localStorage.getItem('refreshToken');
  }

  getUserId(): any {
    return localStorage.getItem('userId');
  }

  getNewAccessToken(): any {
    const refreshToken = this.getRefreshToken();
    const userId = this.getUserId();

    if (refreshToken && userId) {
      return this.http.get(`${this.webService.ROOT_URL}/users/me/access-token`, {
        headers: {
          'x-refresh-token': this.getRefreshToken(),
          _id: this.getUserId()
        },
        observe: 'response'
      }).pipe(
        tap((res: HttpResponse<any>) => {
          this.setAccessToken(res.headers.get('x-access-token'));
        })
      );
    } else {
      return throwError(new Error('Refresh Token and/or User Id is null or undefined'));
    }
  }

  logout(): any {
    this.removeSession();
    this.removeUserDetails();
    this.router.navigateByUrl('/login');
  }

  setUserDetails(name: string, email: string): any {
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
  }

  private removeUserDetails(): any {
    localStorage.removeItem('name');
    localStorage.removeItem('email');
  }



  private setAccessToken(accessToken: string): any {
    localStorage.setItem('accessToken', accessToken);
  }


  private setSession(userId: string, accessToken: string, refreshToken: string): any {
    localStorage.setItem('userId', userId);
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  private removeSession(): any {
    localStorage.removeItem('userId');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }

  isLoggedIn(): any {
    // we want to check whether or not the user id and auth tokens are present in local storage
    const userId = this.getUserId();
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();
    return userId && accessToken && refreshToken;
  }

}
