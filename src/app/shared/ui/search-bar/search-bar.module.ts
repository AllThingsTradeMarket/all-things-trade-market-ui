import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "../button/button.module";

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
