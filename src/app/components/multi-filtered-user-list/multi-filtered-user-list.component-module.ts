import { NgModule } from '@angular/core';
import { MultiFilteredUserListComponent } from './multi-filtered-user-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from "@angular/material/radio";
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    CommonModule,
    MatRadioModule,
    MatTableModule
  ],
  declarations: [MultiFilteredUserListComponent],
  providers: [],
  exports: [MultiFilteredUserListComponent]
})
export class MultiFilteredUserListComponentModule {
}
