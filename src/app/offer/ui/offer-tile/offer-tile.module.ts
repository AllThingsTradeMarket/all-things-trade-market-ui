import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { OfferTileComponent } from './offer-tile.component'; 
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@NgModule({ 
   imports: [CommonModule, ButtonModule, FontAwesomeModule], 
   declarations: [OfferTileComponent], 
   exports: [OfferTileComponent] 
}) 
export class OfferTileModule {} 
