import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts.component';
let httpMock: HttpTestingController;

describe('ContactsComponent', () => {
  let service: ContactsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [ContactsComponent]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ContactsComponent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

