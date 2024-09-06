import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { MyOfferTileComponent } from './my-offer-tile.component'; 
import { ButtonModule } from '../../../shared/ui/button/button.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@NgModule({ 
   imports: [CommonModule, ButtonModule, FontAwesomeModule], 
   declarations: [MyOfferTileComponent], 
   exports: [MyOfferTileComponent] 
}) 
export class MyOfferTileModule {} 
