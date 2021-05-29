import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
let httpMock: HttpTestingController;

describe('LoginComponent', () => {
  let service: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [LoginComponent]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(LoginComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

