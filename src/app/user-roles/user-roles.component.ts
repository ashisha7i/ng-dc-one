import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RolesService } from '../roles.service';
import { Role, UserRoles } from '../Roles';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit {

  userRoles: UserRoles;

  constructor(private rolesService: RolesService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getRoles();
  }

  getRoles() {
    const id = this.route.snapshot.paramMap.get('id');
    this.rolesService.getRoles(id).subscribe(userRoles => { console.log(userRoles); this.userRoles = userRoles; });
  }

}
