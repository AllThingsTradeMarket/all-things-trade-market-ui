import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfirmModalComponent } from './confirm-modal.component';
import { ButtonModule } from '../button/button.module';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [ConfirmModalComponent],
  exports: [ConfirmModalComponent]
})
export class ConfirmModalModule {}