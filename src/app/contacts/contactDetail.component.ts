import {Component, OnInit} from '@angular/core';
import {ContactsService} from './contacts.service';
import { ActivatedRoute,ParamMap } from '@angular/router';
import { Contacts } from './contacts';


@Component({
  selector : 'contactdetail-component',
  templateUrl : 'contactDetail.component.html'
})
export class ContactDetailComponent implements OnInit {
  title:string = 'Contact Detail';
  public contact:Contacts;

  constructor(private _contactService: ContactsService, private route: ActivatedRoute){}

  ngOnInit(){
    let id = this.route.snapshot.paramMap.get('id');
    this._contactService.getContactById(id)
      .subscribe(contactRecieved=>{
        this.contact = contactRecieved;
      });
  }
}
