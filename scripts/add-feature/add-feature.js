const fs = require('fs');
const path = require('path');

// Function to convert lower-kebab-case to UpperCamelCase
const toCamelCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Check if route name and component name are provided
if (process.argv.length < 4) {
  console.error('Error: Route name and component name must be provided');
  console.log('Usage: npm run generate-ui-component <route-name> <component-name>');
  process.exit(1);
}

// Assign arguments to variables
const routeName = process.argv[2];
const pageName = process.argv[3];

// Define the base path
const componentPath = path.join('src', 'app', routeName, 'feature', pageName);
const camelCasePageName = toCamelCase(pageName);
const pageComponentName = `${camelCasePageName}Page`;
const appPreSelector = 'tm';
const routingModuleName = `${pageComponentName}RoutingModule`;

// Create the component directory
fs.mkdirSync(componentPath, { recursive: true });

// Create the component files
fs.writeFileSync(path.join(componentPath, `${pageName}.page.html`), '');
fs.writeFileSync(path.join(componentPath, `${pageName}.page.scss`), '');

// Create the TypeScript file for the component
const pageComponentContent = `
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '${appPreSelector}-${pageName}',
  templateUrl: './${pageName}.page.html',
  styleUrls: ['./${pageName}.page.scss']
})
export class ${pageComponentName} implements OnInit {
    constructor() {}

    ngOnInit() {}
}
`;

fs.writeFileSync(path.join(componentPath, `${pageName}.page.ts`), pageComponentContent.trim());

// Create the module file
const moduleContent = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ${pageComponentName} } from './${pageName}.page';
import { ${routingModuleName} } from './${pageName}-routing.module';

@NgModule({
  imports: [CommonModule, ${routingModuleName}],
  declarations: [${pageComponentName}],
})
export class ${pageComponentName}Module {}
`;

fs.writeFileSync(path.join(componentPath, `${pageName}.module.ts`), moduleContent.trim());

// Create the routing module file
const routingModuleContent = `
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ${pageComponentName} } from './${pageName}.page';

const routes: Routes = [
  {
    path: '',
    component: ${pageComponentName},
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ${routingModuleName} {}
`;

fs.writeFileSync(path.join(componentPath, `${pageName}-routing.module.ts`), routingModuleContent.trim());

console.log(`Page '${pageName}' created successfully in 'src/app/${routeName}/feature/${pageName}'.`);
