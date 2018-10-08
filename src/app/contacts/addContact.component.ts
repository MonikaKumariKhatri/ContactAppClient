import { Component } from '@angular/core';
import {Router} from '@angular/router';

import {Contacts} from './contacts';
import {ContactsService} from './contacts.service';

@Component({
  selector : 'addcontact-component',
  templateUrl : 'addContact.component.html'
})
export class AddContactComponent{
  title:string = 'Add Contact';
  public status:String[]=['Active','Inactive'];
  public newContact:Contacts={
    id:null,
    firstName:'',
    lastName:'',
    email:'',
    phoneNumber:null,
    status:'Active'
  };

  constructor(private router:Router, private _contactsService:ContactsService){}

  addContact(formValue:any){
    let statusReceived:Contacts;
    this._contactsService.addContact(this.newContact)
      .subscribe(data=>{
        statusReceived=data;
        if(statusReceived.firstName === this.newContact.firstName){
          this.router.navigate(['/contacts']);
        }
      });
  }
}
