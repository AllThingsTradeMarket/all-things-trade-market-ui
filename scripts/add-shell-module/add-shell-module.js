const fs = require('fs');
const path = require('path');

// Function to convert lower-kebab-case to UpperCamelCase
const toUpperCamelCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Check if route name is provided
if (process.argv.length < 3) {
  console.error('Error: No route name provided');
  console.log('Usage: npm run add-shell-module <route-name>');
  process.exit(1);
}

// Assign the first argument as the route name
const routeName = process.argv[2];

// Convert lower-kebab-case to UpperCamelCase for module and class names
const moduleName = toUpperCamelCase(`${routeName}-shell`);

// Define the base path
const basePath = path.join('src', 'app', routeName, 'feature', `${routeName}-shell`);

// Create the directory
fs.mkdirSync(basePath, { recursive: true });

// Create the routing module file
const routingModuleFile = path.join(basePath, `${routeName}-shell-routing.module.ts`);
const routingModuleContent = `
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ${moduleName}RoutingModule { }
`;

fs.writeFileSync(routingModuleFile, routingModuleContent.trim());

// Create the module file
const moduleFile = path.join(basePath, `${routeName}-shell.module.ts`);
const moduleContent = `
import { NgModule } from '@angular/core';
import { ${moduleName}RoutingModule } from './${routeName}-shell-routing.module';

@NgModule({
  imports: [${moduleName}RoutingModule],
})
export class ${moduleName}Module {}
`;

fs.writeFileSync(moduleFile, moduleContent.trim());

console.log(`Shell module for '${routeName}' created successfully in 'src/app/${routeName}/feature/${routeName}-shell'.`);
