import { Component, OnInit } from '@angular/core';
import { Roles } from '../Roles';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

  user: string;

  constructor() { }

  ngOnInit() {
  }

  setUser() {

  }
}
