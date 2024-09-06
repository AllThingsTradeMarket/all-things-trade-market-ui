import { Component, OnInit } from '@angular/core';
import { IconDefinition, faComments, faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { NavConfig, NavDropdownItemConfig, NavItemConfig } from './nav.types';
import { AuthService } from '../../../my-account/utils/auth.service';
import { navItemTypes } from '../../constants/constants';


@Component({
  selector: 'tm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  icons = [faHeart, faComments, faUser];
  routes = ['/favourites', '/messages', '/my-account/register'];
  navConfig!: NavConfig;
  isLogged!: boolean;

  constructor(private authService: AuthService) {
    this.authService.getIsLogged().subscribe(value => {
      this.isLogged = value;
      this.setNavConfig();
    });
  }

  ngOnInit(): void {
    this.setNavConfig();
  }

  setNavConfig() {
    this.navConfig = {
      items: [
        {
          icon: faHeart,
          route: '/favourites'
        },
        {
          icon: faComments,
          route: '/messages'
        },
        {
          routePrefix: 'my-account',
          icon: faUser,
          subNavItems: [
            {
              route: 'register',
              text: 'Register',
              displayItem: !this.isLogged,
              type: navItemTypes.LINK
            },
            {
              route: 'login',
              text: 'Login',
              displayItem: !this.isLogged,
              type: navItemTypes.LINK
            },
            {
              text: 'Create Offer',
              displayItem: this.isLogged,
              type: navItemTypes.LINK,
              route: 'offers/create',
              noPrefix: true
            },
            {
              text: 'Logout',
              displayItem: this.isLogged,
              type: navItemTypes.BUTTON,
              onClick: () => {
                this.authService.logout();
              }
            }
          ]
        }
      ]
    };
  }

  castToNavItem(navItem: NavItemConfig | NavDropdownItemConfig) {
    return navItem as NavItemConfig;
  }

  castToDropdownItem(navItem: NavItemConfig | NavDropdownItemConfig) {
    return navItem as NavDropdownItemConfig;
  }

  isDropdownItem(navItem: NavItemConfig | NavDropdownItemConfig) {
    return (navItem as NavDropdownItemConfig).subNavItems !== undefined;
  }

}
