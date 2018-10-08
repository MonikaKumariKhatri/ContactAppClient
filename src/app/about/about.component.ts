import { Component, OnInit } from "@angular/core";
import { ContactsService } from '../contacts/contacts.service';

@Component({
  selector : 'about-component',
  templateUrl : 'about.component.html'
})
export class AboutComponent implements OnInit {
  public aboutData:any;

  constructor(private _contactService:ContactsService){}

  ngOnInit(){
    this._contactService.getAbout()
      .subscribe(dataRecieved=>{
        this.aboutData=dataRecieved
  });
}
}
