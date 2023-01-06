import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoleModel } from '../models/role.model';

@Injectable()
export class RoleService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<RoleModel[]> {
    return this._httpClient.get<RoleModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/roles');
  }
}
