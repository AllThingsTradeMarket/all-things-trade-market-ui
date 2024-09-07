import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { OfferTileComponent } from './offer-tile.component'; 
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
 
@NgModule({ 
   imports: [CommonModule, ButtonModule, FontAwesomeModule, RouterModule], 
   declarations: [OfferTileComponent], 
   exports: [OfferTileComponent] 
}) 
export class OfferTileModule {} 
