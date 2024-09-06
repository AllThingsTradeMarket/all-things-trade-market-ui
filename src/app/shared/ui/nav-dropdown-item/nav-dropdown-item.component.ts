import { Component, Input } from '@angular/core'; 
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { ButtonSubNavItemConfig, LinkSubNavItemConfig, NavDropdownItemConfig, SubNavItemConfig } from '../nav/nav.types';
import { navItemTypes } from '../../constants/constants';
 
@Component({ 
   selector: 'tm-nav-dropdown-item', 
   templateUrl: './nav-dropdown-item.component.html', 
   styleUrls: ['./nav-dropdown-item.component.scss'] 
}) 
export class NavDropdowniIemComponent {
   @Input() config!: NavDropdownItemConfig;
   displayDropdown: boolean = false;

   toggleDisplayDropdown() {
      this.displayDropdown = !this.displayDropdown;
   }

   isButton(subNavItem: SubNavItemConfig) {
      return subNavItem.type === navItemTypes.BUTTON;
   }

   castToButton = (subNabItem: SubNavItemConfig) => subNabItem as ButtonSubNavItemConfig;
   castToLink = (subNabItem: SubNavItemConfig) => subNabItem as LinkSubNavItemConfig;

   getItemRoute(subNavItem: SubNavItemConfig) {
      const itemAsLink = this.castToLink(subNavItem)
      return itemAsLink.noPrefix ? itemAsLink.route : this.config.routePrefix + '/' + itemAsLink.route;
   }
}
