import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { ROLES } from './mock-roles';
import { Roles } from './Roles';

@Injectable()
export class RolesService {
  private getRolesURL = 'http://localhost:8080/roles?userId=aagnihot';

  constructor(private http: HttpClient) { }

  getRoles(id: string): Observable<Roles> {
    console.log('ID --> ' + id);
    return this.http.get<Roles>(this.getRolesURL);
    // return of(this.values);
  }
}
