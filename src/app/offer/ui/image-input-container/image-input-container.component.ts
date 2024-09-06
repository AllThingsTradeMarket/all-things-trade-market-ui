import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

@Component({
   selector: 'tm-image-input-container',
   templateUrl: './image-input-container.component.html',
   styleUrls: ['./image-input-container.component.scss']
})
export class ImageInputContainerComponent implements OnChanges {
   readonly cameraIcon = faCamera;
   @Input() config!: {
      imageFile?: File
   };
   imgSrc!: File;

   ngOnChanges(changes: SimpleChanges): void {
      if (changes['config'] && changes['config'].currentValue.imageFile) {

         const imageFile = changes['config'].currentValue.imageFile;

         if (imageFile instanceof File) {
            const reader = new FileReader();
            reader.onload = (event: any) => {
               this.imgSrc = event.target.result;
            };

            reader.readAsDataURL(imageFile);
         } else {
            console.error('imageFile is not a File object, it might already be a base64 string.');
         }
      }
   }
} 
