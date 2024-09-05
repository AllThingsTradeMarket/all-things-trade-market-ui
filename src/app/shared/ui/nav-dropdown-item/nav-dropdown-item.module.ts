import { CommonModule } from '@angular/common'; 
import { NgModule } from '@angular/core'; 
import { NavDropdowniIemComponent } from './nav-dropdown-item.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
 
@NgModule({ 
   imports: [CommonModule, FontAwesomeModule, RouterModule], 
   declarations: [NavDropdowniIemComponent], 
   exports: [NavDropdowniIemComponent] 
}) 
export class NavDropdownItemModule {} 
