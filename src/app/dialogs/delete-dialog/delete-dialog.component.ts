import { Component, Inject, OnInit } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrl: './delete-dialog.component.scss'
})
export class DeleteDialogComponent implements OnInit {
  deleteContact!: Contact;
  deleteForm = new FormGroup(
    {
      firstName: new FormControl({value:'', disabled:true}),
      lastName: new FormControl({value:'', disabled:true}),
      phoneNumber: new FormControl({value:'', disabled:true}),
      address: new FormControl({value:'', disabled:true})
    } 
  );
  idToDelete!:number;
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Contact,
  private contactService:ContactsService){
    this.deleteContact = data;

  }
  ngOnInit(): void {
    this.deleteForm.controls['firstName'].setValue(this.deleteContact.firstName);
    this.deleteForm.controls['lastName'].setValue(this.deleteContact.lastName);
    this.deleteForm.controls['phoneNumber'].setValue(this.deleteContact.phoneNumber);
    this.deleteForm.controls['address'].setValue(this.deleteContact.address);
    console.log(this.deleteContact);
  }


  onSubmit() {
   let contactId = this.deleteContact.id;
   this.contactService.deleteContact(contactId);
  
    console.log(this.contactService.contacts);
    this.dialogRef.close();
    }


  

}
