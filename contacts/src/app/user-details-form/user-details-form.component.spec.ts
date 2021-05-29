import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { UserDetailsFormComponent } from './user-details-form.component';
let httpMock: HttpTestingController;

describe('UserDetailsFormComponent', () => {
  let service: UserDetailsFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [UserDetailsFormComponent]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserDetailsFormComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

