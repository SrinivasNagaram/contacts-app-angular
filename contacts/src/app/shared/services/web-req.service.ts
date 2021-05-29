import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebReqService {

  readonly ROOT_URL = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  get(uri: string): any {
    return this.http.get(this.ROOT_URL + uri);
  }

  post(uri: string, payload: object): any {
    return this.http.post(this.ROOT_URL + uri, payload);
  }

  patch(uri: string, payload: object): any {
    return this.http.patch(this.ROOT_URL + uri, payload);
  }

  delete(uri: string): any {
    return this.http.delete(this.ROOT_URL + uri);
  }
}
