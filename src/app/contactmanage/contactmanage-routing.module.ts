import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlexBoxComponent } from '../demo/flex-box/flex-box.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';

const routes: Routes = [
  {
    path: '', component: ContactmanagerComponent,
    children: [
      { path: '', component: MainContentComponent },
      { path: ':id', component: MainContentComponent },
      { path: 'flexbox', component: FlexBoxComponent },
    ]
  },
  { path: '**', redirectTo: '' }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactmanageRoutingModule { }
