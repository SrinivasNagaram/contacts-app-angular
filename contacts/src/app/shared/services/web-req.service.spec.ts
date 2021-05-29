import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { WebReqService } from './web-req.service';
import { RouterModule } from '@angular/router';
let httpMock: HttpTestingController;

describe('WebReqService', () => {
  let service: WebReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([]), HttpClientTestingModule],
      providers: [WebReqService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(WebReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


});

