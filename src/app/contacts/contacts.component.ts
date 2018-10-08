import {Component, OnInit, ViewChild} from '@angular/core';
import { ContactsService } from './contacts.service';
import { Contacts } from './contacts'

import {MatPaginator, MatTableDataSource} from '@angular/material';


@Component({
  selector : 'contacts-component',
  templateUrl : 'contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit{

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phoneNumber', 'status', 'edit','delete'];
  dataSource: MatTableDataSource<Contacts>;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  title:string = 'Contact List';
  
  constructor(private _contactService : ContactsService){}

  ngOnInit(){
    this._contactService.getContacts()
      .subscribe(contactsRecieved=>{
        this.dataSource = new MatTableDataSource(contactsRecieved);
        this.dataSource.paginator = this.paginator;
    });
  }

  deleteContact(id){
    this._contactService.deleteContact(id)
      .subscribe(data=>{
        if(data["n"] === 1 && data["ok"] === 1){
          this.ngOnInit();
  }
});
}
}
