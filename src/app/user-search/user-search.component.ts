import { Component, OnInit, OnDestroy } from '@angular/core';
import { Role } from '../Roles';
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

  setUser(userInput: string) {
    this.user = '';
    this.user = userInput;
  }
}
