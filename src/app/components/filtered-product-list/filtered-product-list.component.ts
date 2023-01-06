import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import { CategoryService } from '../../services/category.service';
import {ProductModel} from "../../models/product.model";
import {ProductService} from "../../services/product.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-filtered-product-list',
  styleUrls: ['./filtered-product-list.component.scss'],
  templateUrl: './filtered-product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilteredProductListComponent {
  readonly categoriesList$: Observable<string[]> = this._categoryService.getAll();
  readonly category = new FormControl();

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAll(),
    this.category.valueChanges
  ]).pipe(
    map(([products, category]: [ProductModel[], string]) => {
      return products.filter(product => product.category === category);
    })
  );

  constructor(private _categoryService: CategoryService, private _productService: ProductService) {
  }
}
