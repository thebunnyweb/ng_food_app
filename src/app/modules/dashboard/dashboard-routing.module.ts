import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES),
    SharedModule
  ],
  exports: [
    RouterModule,
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardRoutingModule { }
