import { Component, OnInit } from '@angular/core';
import { RolesService } from '../roles.service';
import { ActivatedRoute } from '@angular/router';

import { Roles } from '../Roles';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  roles: Roles;

  constructor(private rolesService: RolesService) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    const id = 'aagnihot';
    this.rolesService.getRoles(id).subscribe(roles => { console.log(roles); this.roles = roles;});
  }

}
