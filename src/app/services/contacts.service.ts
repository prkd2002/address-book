import { Injectable } from '@angular/core';
import { Contact } from '../interfaces/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts:Contact[] = [{
    id:1,
    firstName: 'John',
    lastName: 'Johnson',
    phoneNumber: '111-111-1111',
    address: '111 Main St, Minneapoll'
  },
  {
    id:2,
    firstName: 'Jack',
    lastName: 'Jackson',
    phoneNumber: '222-222-222',
    address: '222 Main St, Minneapoll'
  },
  {
    id:3,
    firstName: 'Erick',
    lastName: 'Marinae',
    phoneNumber: '333-333-3333',
    address: '333 Main St, Minneapoll'
  }]

  constructor() { }

  getContacts(){
    return this.contacts;

  }
}
