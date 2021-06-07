import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactmanageRoutingModule } from './contactmanage-routing.module';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { UserService } from './services/user.service';

import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';


@NgModule({
  declarations: [
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    ContactmanagerComponent,
    NotesComponent
  ],
  imports: [
    CommonModule,
    ContactmanageRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [
    UserService
  ]
})
export class ContactmanageModule { }
