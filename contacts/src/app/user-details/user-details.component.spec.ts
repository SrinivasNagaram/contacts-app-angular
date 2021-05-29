import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from './user-details.component';
let httpMock: HttpTestingController;

describe('UserDetailsComponent', () => {
  let service: UserDetailsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [UserDetailsComponent]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UserDetailsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

