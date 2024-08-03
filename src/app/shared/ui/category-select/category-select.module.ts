import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategorySelectComponent } from './category-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CategorySelectComponent],
  exports: [CategorySelectComponent],
})
export class CategorySelectModule {}
