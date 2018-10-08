import {Component, OnInit} from '@angular/core';
import {Contacts} from './contacts';
import {ContactsService} from './contacts.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector : 'editcontact-component',
  templateUrl : 'editContact.component.html'
})
export class EditContactComponent implements OnInit{
  title:string = 'Edit Contact';
  public contact:Contacts;
  public status:String[]=['Active','Inactive'];
  public id:number;

  constructor(private _contactService:ContactsService, private route:ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.id= parseInt(this.route.snapshot.paramMap.get('id'));
    this._contactService.getContactById(this.id)
      .subscribe(contactData=>this.contact=contactData);
  }

  UpdateContact(formValue:any){
    let newContact:Contacts={
      id:null,
      firstName:'',
      lastName:'',
      email:'',
      phoneNumber:null,
      status:'Active'
    };
    newContact.id=this.id;
    newContact.firstName=formValue.firstName;
    newContact.lastName=formValue.lastName;
    newContact.email=formValue.email;
    newContact.phoneNumber=formValue.phoneNumber;
    newContact.status=formValue.status;

    this._contactService.editContact(newContact)
      .subscribe(data=>{
        if(data["n"] === 1 && data["ok"] === 1){
          this.router.navigate(['/contacts']);
        }
      });
  }
}
