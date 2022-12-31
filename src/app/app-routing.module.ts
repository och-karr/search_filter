import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductServiceModule } from './services/product.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'list-2-form-filtering-single', component: FilteredProductListComponent }]), FilteredProductListComponentModule, CategoryServiceModule, ProductServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
