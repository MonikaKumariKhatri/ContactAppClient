import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Contacts } from './contacts';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

let headers1=new HttpHeaders();
headers1.append('Content-Type', 'text');

@Injectable()
export class ContactsService{

//pointing to localhost now as server is running at localhost:3000 -  other wise for integrated(delpoyed app) its :
/*
private _baseUrl:string = "/api/about";
private _contactUrl:string = "/api/contacts";
private _editContactUrl:string = "/api/editContact";
private _addContactUrl:string = "/api/addContact";
private _deleteContactUrl:string = "/api/deleteContact";
*/
  private _baseUrl:string = "http://localhost:3000/api/about";
  private _contactUrl:string = "http://localhost:3000/api/contacts";
  private _editContactUrl:string = "http://localhost:3000/api/editContact";
  private _addContactUrl:string = "http://localhost:3000/api/addContact";
  private _deleteContactUrl:string = "http://localhost:3000/api/deleteContact";

constructor(private http: HttpClient){}

  getContacts(): Observable<Contacts[]>{
    return this.http.get<Contacts[]>(this._contactUrl);
  }

  getContactById(id): Observable<Contacts>{
    return this.http.get<Contacts>(this._contactUrl+'/'+id);
  }

  editContact(contact): Observable<String>{
    return this.http.put<String>(this._editContactUrl,contact);
  }

  addContact(newContact): Observable<Contacts>{
    return this.http.post<Contacts>(this._addContactUrl,newContact);
  }

  deleteContact(id): Observable<String>{
    return this.http.put<String>(this._deleteContactUrl+'/'+id,'');
  }

  getAbout(): Observable<String>{
    return this.http.get<String>(this._baseUrl);
  }
}
