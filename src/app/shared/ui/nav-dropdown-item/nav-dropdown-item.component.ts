import { Component, Input } from '@angular/core'; 
import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { ButtonSubnavItemConfig, LinkSubnavItemConfig, NavDropdownItemConfig, SubnavItemConfig } from '../nav/nav.types';
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

   isButton(subNavItem: SubnavItemConfig) {
      return subNavItem.type === navItemTypes.BUTTON;
   }

   castToButton = (subNabItem: SubnavItemConfig) => subNabItem as ButtonSubnavItemConfig;
   castToLink = (subNabItem: SubnavItemConfig) => subNabItem as LinkSubnavItemConfig;
}
