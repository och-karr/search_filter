import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {combineLatest, map, Observable} from 'rxjs';
import { DepartmentModel } from '../../models/department.model';
import { RoleModel } from '../../models/role.model';
import { DepartmentService } from '../../services/department.service';
import { UserService } from '../../services/user.service';
import { RoleService } from '../../services/role.service';

@Component({
  selector: 'app-multi-filtered-user-list',
  styleUrls: ['./multi-filtered-user-list.component.scss'],
  templateUrl: './multi-filtered-user-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiFilteredUserListComponent {
  readonly departmentList$: Observable<DepartmentModel[]> = this._departmentService.getAll();
  readonly roleList$: Observable<RoleModel[]> = this._roleService.getAll();

  readonly filterForm: FormGroup = new FormGroup({
    department: new FormControl(),
    role: new FormControl(),
  });

  readonly list$: Observable<{
    id: string;
    email: string;
    role: string;
    department: string;
  }[]> = combineLatest([
    this._userService.getAll(),
    this.filterForm.controls['department'].valueChanges,
    this.filterForm.controls['role'].valueChanges
  ]).pipe(
    map(([users, department, role]) => {
      return users
        .filter(user  =>
          user.departmentId === +department.id && user.roleId === role.id
        )
        .map(user => {
          return {
            id: user.id,
            email: user.email,
            role: role.role,
            department: department.name,
          }
        })
    })
  )

  constructor(private _departmentService: DepartmentService, private _userService: UserService, private _roleService: RoleService) {
  }
}
