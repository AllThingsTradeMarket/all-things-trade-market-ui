import { Component, OnInit, ViewChild } from '@angular/core';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { CreateOfferDto } from '../../dtos/offer.dtos';
import { OfferDataService } from '../../data-access/offer-data.service';
import { ImageContainerConfig } from '../../model/offer-module-types';
import { isNil } from 'lodash';
import { AuthService } from '../../../my-account/utils/auth.service';

@Component({
  selector: 'tm-create-offer',
  templateUrl: './create-offer.page.html',
  styleUrls: ['./create-offer.page.scss']
})
export class CreateOfferPage implements OnInit {
  readonly validExtensions = ['jpg', 'png', 'jpeg'];
  readonly cameraIcon = faCamera;
  formData: CreateOfferDto = {
    userId: '',
    title: '',
    description: '',
    images: []
  };
  readonly imageFieldsIndexes = [0, 1, 2, 3, 4];
  imageFieldsConfig: {
    configs: ImageContainerConfig[]
  } = {
      configs: []
    };
  addedImagesCount = 0;

  @ViewChild('fileInput') fileInput: any;

  constructor(private offerDataService: OfferDataService, private authService: AuthService) { }

  ngOnInit() {
    this.initImageFieldsConfig();
  }

  async createOffer() {
    const formData = new FormData();
    formData.append('description', this.formData.description);
    formData.append('title', this.formData.title);

    this.formData.images = this.imageFieldsConfig.configs
      .map(config => config.imageFile!)
      .filter(image => !isNil(image));

    this.formData.images.forEach(image => {
      formData.append('images', image, image.name);
    });
    
    this.offerDataService.createOffer(formData).subscribe(response => {
      console.log(response);
    });
    
  }

  openFileDialog() {
    this.fileInput.nativeElement.click();
  }

  onImageSelected(event: any) {
    const file = event.target.files[0];
    if (file && this.hasValidExtension(file)) {
      this.addImageToFileConfig(file);
      return;
    }
    console.error(`file has invalid extension: ${file.name}`);
  }

  hasValidExtension = (file: File): boolean => {
    const fileNameParts = file.name.split('.');
    const extension = fileNameParts[fileNameParts.length - 1];
    return this.validExtensions.includes(extension);
  }

  initImageFieldsConfig() {
    this.imageFieldsIndexes.forEach(() => {
      this.imageFieldsConfig.configs.push({
        imageFile: undefined
      });
    });
  }

  addImageToFileConfig(imageFile: File) {
    this.imageFieldsConfig.configs[this.addedImagesCount] = {
      imageFile
    };
    this.addedImagesCount++;
  }
}
