import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import { UserRolesComponent } from '../user-roles/user-roles.component';
import { UserSearchComponent } from '../user-search/user-search.component';

const routes: Routes = [
  { path: 'roles/:id', component: UserRolesComponent },
  { path: 'search', component: UserSearchComponent }
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
