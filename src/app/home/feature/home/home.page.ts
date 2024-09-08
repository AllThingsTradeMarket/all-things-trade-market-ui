import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HomePageDataService } from '../../data-access/home-page-data.service';
import { AuthService } from '../../../my-account/utils/auth.service';

@Component({
  selector: 'tm-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
  userLogged!: boolean;
  username!: string | undefined;
  constructor(private homePageDataService: HomePageDataService, private authService: AuthService) { }

  ngOnInit() { 
    this.authService.getIsLogged().subscribe(isLogged => {
      this.userLogged = isLogged;
      this.username = isLogged ? this.authService.getCurrentUserUsername() : undefined;
    });
  }

}
