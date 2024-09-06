import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateOfferPage } from './create-offer.page';
import { CreateOfferPageRoutingModule } from './create-offer-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ImageInputContainerModule } from '../../ui/image-input-container/image-input-container.module';
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, CreateOfferPageRoutingModule, FormsModule, FontAwesomeModule, ImageInputContainerModule, ButtonModule, RouterModule],
  declarations: [CreateOfferPage],
})
export class CreateOfferPageModule {}
