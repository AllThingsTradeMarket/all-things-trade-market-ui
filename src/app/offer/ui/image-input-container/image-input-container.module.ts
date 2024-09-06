import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { ImageInputContainerComponent } from './image-input-container.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@NgModule({ 
   imports: [CommonModule, FontAwesomeModule], 
   declarations: [ImageInputContainerComponent], 
   exports: [ImageInputContainerComponent] 
}) 
export class ImageInputContainerModule {} 
