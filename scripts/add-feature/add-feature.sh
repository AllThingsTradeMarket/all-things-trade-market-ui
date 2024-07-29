#!/bin/bash

# Check if route name and component name are provided
if [ -z "$1" ] || [ -z "$2" ]; then
  echo "Error: Route name and component name must be provided"
  echo "Usage: npm run generate-ui-component <route-name> <component-name>"
  exit 1
fi

convert_to_camel_case() {
  echo "$1" | sed -r 's/(^|-)([a-z])/\U\2/g'
}

# Assign arguments to variables
ROUTE_NAME=$1
PAGE_NAME=$2

# Define the base path
COMPONENT_PATH="src/app/$ROUTE_NAME/feature/$PAGE_NAME"
CAMEL_CASE_PAGE_NAME=$(convert_to_camel_case $PAGE_NAME)
PAGE_COMPONENT_NAME="${CAMEL_CASE_PAGE_NAME^}Page"
APP_PRE_SELECTOR="tm"
ROUTING_MODULE_NAME="${PAGE_COMPONENT_NAME}RoutingModule"

# Create the component directory
mkdir -p $COMPONENT_PATH

# Create the component files
cat <<EOL > $COMPONENT_PATH/$PAGE_NAME.page.html
EOL

cat <<EOL > $COMPONENT_PATH/$PAGE_NAME.page.scss
EOL

cat <<EOL > $COMPONENT_PATH/$PAGE_NAME.page.ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '$APP_PRE_SELECTOR-$PAGE_NAME',
  templateUrl: './$PAGE_NAME.page.html',
  styleUrls: ['./$PAGE_NAME.page.scss'],
   changeDetection: ChangeDetectionStrategy.OnPush
})
export class $PAGE_COMPONENT_NAME implements OnInit {
    constructor() {}

    ngOnInit() {}
}
EOL

cat <<EOL > $COMPONENT_PATH/$PAGE_NAME.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { $PAGE_COMPONENT_NAME } from './$PAGE_NAME.page';
import { $ROUTING_MODULE_NAME } from './${PAGE_NAME}-routing.module';

@NgModule({
  imports: [CommonModule, $ROUTING_MODULE_NAME],
  declarations: [$PAGE_COMPONENT_NAME],
})
export class ${PAGE_COMPONENT_NAME}Module {}
EOL

cat <<EOL > $COMPONENT_PATH/$PAGE_NAME-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { $PAGE_COMPONENT_NAME } from './$PAGE_NAME.page';

const routes: Routes = [
  {
    path: '',
    component: $PAGE_COMPONENT_NAME,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class $ROUTING_MODULE_NAME {}
EOL


echo "Page '$PAGE_NAME' created successfully in 'src/app/$ROUTE_NAME/ui/$PAGE_NAME'."
