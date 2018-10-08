import { Routes, RouterModule } from '@angular/router';

import {AboutComponent} from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contactDetail.component';
import { AddContactComponent } from './contacts/addContact.component';
import { EditContactComponent } from './contacts/editContact.component';

const appRoutes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'contacts/:id', component: ContactDetailComponent},
  { path: 'addContact', component: AddContactComponent},
  { path: 'editContact/:id', component: EditContactComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
