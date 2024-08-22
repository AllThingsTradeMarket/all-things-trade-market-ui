import { Injectable } from '@angular/core';
import { ApiService } from '../../shared/utils/apiService';
import { Observable } from 'rxjs';
import { Offer } from '../model/home-page.types';
import { ApiResponse } from '../../shared/model/shared.types';

@Injectable({
  providedIn: 'root'
})
export class HomePageDataService {
  constructor(private apiService: ApiService) { }
}