import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
import { RoleModel } from '../../models/role.model';
import { DepartmentService } from '../../services/department.service';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-multi-filtered-user-list',
  styleUrls: ['./multi-filtered-user-list.component.scss'],
  templateUrl: './multi-filtered-user-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiFilteredUserListComponent {
  readonly departmentList$: Observable<DepartmentModel[]> = this._departmentService.getAll();
  readonly userList$: Observable<UserModel[]> = this._userService.getAll();
  readonly roleList$: Observable<RoleModel[]> = this._roleService.getAll();

  department = new FormControl('');
  role = new FormControl('');

  constructor(private _departmentService: DepartmentService, private _userService: UserService, private _roleService: RoleService) {
  }

  showEl(element: object) {
    console.log(element);
  }
}
