import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {combineLatest, map, Observable} from 'rxjs';
import { DepartmentModel } from '../../models/department.model';
import { UserModel } from '../../models/user.model';
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
  // readonly userList$: Observable<UserModel[]> = this._userService.getAll();
  readonly roleList$: Observable<RoleModel[]> = this._roleService.getAll();

  readonly filterForm: FormGroup = new FormGroup({
    departmentId: new FormControl(),
    roleId: new FormControl(),

  });

  readonly list$: Observable<UserModel[]> = combineLatest([
    this._userService.getAll(),
    this.filterForm.controls['departmentId'].valueChanges,
    this.filterForm.controls['roleId'].valueChanges
  ]).pipe(
    map(([users, departmentId, roleId]: [UserModel[], string, number]) => {
      console.log(users)
      return users
        .filter(
          user  => user.departmentId === +departmentId && user.roleId === +roleId
          // user => {
          //   if (user.departmentId === +departmentId && user.roleId === +roleId) {
          //     console.log(user)
          //     return user;
          //   } else return [];
          // }
        )
    })
  )

  // click = () => {
  //   console.log(this.list$)
  // }


  constructor(private _departmentService: DepartmentService, private _userService: UserService, private _roleService: RoleService) {
  }
}
