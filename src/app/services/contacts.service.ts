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

  createContacts(newContact:Contact){
    //finding highest id;
    let highestId = 0;
    this.contacts.forEach(contactsObject => {
      if(contactsObject.id> highestId){
        highestId = contactsObject.id;
      }
    })
    this.contacts.push({
      id:highestId +1,
      firstName: newContact.firstName,
      lastName: newContact.lastName,
      phoneNumber: newContact.phoneNumber,
      address: newContact.address
      
    });



   
  }

  updateContact(updateContact:Contact) {
    const index = this.contacts.findIndex(contact => contact.id == updateContact.id);
    this.contacts[index].firstName = updateContact.firstName;
    this.contacts[index].lastName = updateContact.lastName;
    this.contacts[index].phoneNumber = updateContact.phoneNumber;
    this.contacts[index].address = updateContact.address;

  }

  deleteContact(id:number){
    const index = this.contacts.findIndex(contactsObject => contactsObject.id = id);
    this.contacts.splice(index, 1);

  }
}
