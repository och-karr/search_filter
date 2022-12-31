import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { FilteredProductListComponent } from './filtered-product-list.component';
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [MatFormFieldModule, MatRadioModule, ReactiveFormsModule, CommonModule, FormsModule, MatListModule, MatCardModule],
  declarations: [FilteredProductListComponent],
  providers: [],
  exports: [FilteredProductListComponent]
})
export class FilteredProductListComponentModule {
}
