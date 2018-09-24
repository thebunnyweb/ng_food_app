import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


const ROUTES: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "dashboard"
    // loadChildren: "./modules/register/register.module#RegisterModule"
  },
  {
    path: "dashboard",
    pathMatch: "full",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, { useHash: true, enableTracing: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
