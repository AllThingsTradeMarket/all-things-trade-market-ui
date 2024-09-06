import { Component } from '@angular/core';
import { LoadingService } from '../../utils/loadingService';

@Component({
  selector: 'tm-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService) {
    this.loadingService.getIsLoading().subscribe(isLoading => {
      this.isLoading = isLoading;
    })
  }
}