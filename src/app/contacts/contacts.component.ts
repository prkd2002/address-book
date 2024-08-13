import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Contact } from '../interfaces/contact';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from '../dialogs/update-dialog/update-dialog.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {

  contactsDataArray:Contact[] = [];
  columnsToDisplay = ['FirstName','LastName','PhoneNumber','Address', 'Update', 'Delete'];

  constructor(
    private contactService:ContactsService,
    private dialog: MatDialog
  ){

  }


  ngOnInit(): void {
    this.contactsDataArray =  this.contactService.getContacts();
    console.log(this.contactsDataArray);
  }

  onDelete() {
    throw new Error('Method not implemented.');
    }
    onUpdate(contact: Contact) {
      let dialogRef = this.dialog.open(UpdateDialogComponent, {
        height: '600px',
        width: '500px',
        data: contact,
      });
    }

}
