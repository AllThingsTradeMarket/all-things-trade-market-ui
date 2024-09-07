import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchBarComponent } from './search-bar.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "../button/button.module";
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, ButtonModule, RouterModule],
  declarations: [SearchBarComponent],
  exports: [SearchBarComponent],
})
export class SearchBarModule {}
