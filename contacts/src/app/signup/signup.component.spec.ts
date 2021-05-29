import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
let httpMock: HttpTestingController;

describe('UserDetailsFormComponent', () => {
  let service: SignupComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [SignupComponent]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(SignupComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

