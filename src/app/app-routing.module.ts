import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { MultiFilteredUserListComponent } from './components/multi-filtered-user-list/multi-filtered-user-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductServiceModule } from './services/product.service-module';
import { MultiFilteredUserListComponentModule } from './components/multi-filtered-user-list/multi-filtered-user-list.component-module';
import { DepartmentServiceModule } from './services/department.service-module';
import { UserServiceModule } from './services/user.service-module';
import { RoleServiceModule } from './services/role.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-form-filtering-single', component: FilteredProductListComponent }, { path: 'list-2-form-filtering-multi-users', component: MultiFilteredUserListComponent }]), FilteredProductListComponentModule, CategoryServiceModule, ProductServiceModule, MultiFilteredUserListComponentModule, DepartmentServiceModule, UserServiceModule, RoleServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
