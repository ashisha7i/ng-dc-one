import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RolesService } from './roles.service';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserRolesComponent } from './user-roles/user-roles.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserRolesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [RolesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
