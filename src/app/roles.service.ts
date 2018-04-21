import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ROLES } from './mock-roles';
import { Role, UserRoles } from './Roles';

@Injectable()
export class RolesService {
  private getRolesURL = 'http://localhost:8080/roles/';

  constructor(private http: HttpClient) { }

  getRoles(id: string): Observable<UserRoles> {
    console.log('ID --> ' + id);
    return this.http.get<UserRoles>(this.getRolesURL + id);
  }
}
