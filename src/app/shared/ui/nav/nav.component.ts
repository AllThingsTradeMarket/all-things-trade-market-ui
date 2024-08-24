import { Component, OnInit } from '@angular/core';
import { IconDefinition, faComments, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { faShoppingBasket, faTruck } from '@fortawesome/free-solid-svg-icons';

type NavItem = {
  route: string,
  icon: IconDefinition
};

@Component({
  selector: 'tm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  icons = [faTruck, faHeart, faComments, faUser, faShoppingBasket];
  routes = ['/deliveries', '/favourites', '/messages', '/my-account/register', '/basket'];
  navItems: NavItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.prepareRoutes();
  }

  prepareRoutes() {
    this.routes.forEach((route, i) => {
      this.navItems.push({
        route: route,
        icon: this.icons[i]
      });
    })
  }

}
