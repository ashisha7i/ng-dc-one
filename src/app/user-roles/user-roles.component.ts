import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RolesService } from '../roles.service';
import { Role, UserRoles } from '../Roles';

@Component({
  selector: 'app-user-roles',
  templateUrl: './user-roles.component.html',
  styleUrls: ['./user-roles.component.css']
})
export class UserRolesComponent implements OnInit, OnDestroy {

  @Input()
  userId: string;

  userRoles: UserRoles;

  constructor(private rolesService: RolesService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    this.getRoles();
  }

  ngOnDestroy() {
    this.userId = '';
    this.userRoles = null;
  }

  getRoles() {
    // const id = this.route.snapshot.paramMap.get('id');
    this.rolesService.getRoles(this.userId).subscribe(userRoles => { console.log(userRoles); this.userRoles = userRoles; });
  }


}
