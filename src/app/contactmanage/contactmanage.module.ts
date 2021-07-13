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
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MainContentComponent,
    SidenavComponent,
    ToolbarComponent,
    ContactmanagerComponent,
    NotesComponent,
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    ContactmanageRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService
  ]
})
export class ContactmanageModule { }
