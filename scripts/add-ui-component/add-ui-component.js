const fs = require('fs');
const path = require('path');

// Check if route name and component name are provided
if (process.argv.length < 4) {
  console.error('Error: Route name and component name must be provided');
  console.log('Usage: npm run generate-ui-component <route-name> <component-name>');
  process.exit(1);
}

const routeName = process.argv[2];
const componentName = process.argv[3];

// Function to convert kebab-case or hyphenated names to CamelCase
const toCamelCase = (str) => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
};

// Convert component name to CamelCase
const camelComponentName = toCamelCase(componentName) + 'Component';
const camelModuleName = toCamelCase(componentName) + 'Module';

// Define the base path for the component
const componentPath = path.join('src', 'app', routeName, 'ui', componentName);

// Create the component directory
fs.mkdirSync(componentPath, { recursive: true });

// Create the component files
fs.writeFileSync(path.join(componentPath, `${componentName}.component.html`), '');
fs.writeFileSync(path.join(componentPath, `${componentName}.component.scss`), '');

// Generate component TypeScript file
const componentTsContent = `
import { Component } from '@angular/core';

@Component({
  selector: 'tm-${componentName}',
  templateUrl: './${componentName}.component.html',
  styleUrls: ['./${componentName}.component.scss']
})
export class ${camelComponentName} {}
`;

fs.writeFileSync(path.join(componentPath, `${componentName}.component.ts`), componentTsContent.trim());

// Generate module TypeScript file
const moduleTsContent = `
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ${camelComponentName} } from './${componentName}.component';

@NgModule({
  imports: [CommonModule],
  declarations: [${camelComponentName}],
  exports: [${camelComponentName}]
})
export class ${camelModuleName} {}
`;

fs.writeFileSync(path.join(componentPath, `${componentName}.module.ts`), moduleTsContent.trim());

console.log(`Component '${componentName}' created successfully in 'src/app/${routeName}/ui/${componentName}'.`);
