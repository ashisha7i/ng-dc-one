import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { UserRolesComponent } from '../user-roles/user-roles.component';
import { HomeComponentComponent } from '../home-component/home-component.component';

const routes: Routes = [
  { path: '', component: HomeComponentComponent },
  { path: 'roles/:id', component: UserRolesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
