import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table.component';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    FormsModule,
    DatePipe
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TableModule { }
