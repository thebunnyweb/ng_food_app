import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module'
import { RouterModule, Routes } from '@angular/router';

import { RegisterviewComponent } from '../../components/registerview/registerview.component';
import { RegisterComponent } from './register.component';


const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: RegisterComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  declarations: [
    RegisterviewComponent,
    RegisterComponent
  ],
  exports: [
    RouterModule,
  ]
})
export class RegisterRoutingModule { }
