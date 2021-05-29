import { Injectable } from '@angular/core';
import { WebReqService } from './web-req.service';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private webService: WebReqService) { }

  getAll(): any {
    return this.webService.get('/contacts');
  }

  create(contact: Contact): any {
    return this.webService.post('/contacts', contact);
  }

  createCategory(title: string): any {
    return this.webService.post('/category', { title });
  }

  update(contact: Contact): any {
    return this.webService.patch(`/contacts/${contact._id}`, contact);
  }

  delete(contact: Contact): any {
    return this.webService.delete(`/contacts/${contact._id}`);
  }
}
