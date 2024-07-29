#!/bin/bash

# Check if route name is provided
if [ -z "$1" ]; then
  echo "Error: No route name provided"
  echo "Usage: npm run add-shell-module <route-name>"
  exit 1
fi

# Assign the first argument as the route name
ROUTE_NAME=$1

# Convert lower-kebab-case to UpperCamelCase for module and class names
MODULE_NAME=$(echo "$ROUTE_NAME-shell" | sed -r 's/(^|-)([a-z])/\U\2/g')

# Define the base path
BASE_PATH="src/app/$ROUTE_NAME/feature/$ROUTE_NAME-shell"

# Create the directory
mkdir -p $BASE_PATH

# Create the routing module file
ROUTING_MODULE_FILE="$BASE_PATH/$ROUTE_NAME-shell-routing.module.ts"
cat <<EOL > $ROUTING_MODULE_FILE
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ${MODULE_NAME}RoutingModule { }
EOL

# Create the module file
MODULE_FILE="$BASE_PATH/$ROUTE_NAME-shell.module.ts"
cat <<EOL > $MODULE_FILE
import { NgModule } from '@angular/core';
import { ${MODULE_NAME}RoutingModule } from './$ROUTE_NAME-shell-routing.module';

@NgModule({
  imports: [${MODULE_NAME}RoutingModule],
})
export class ${MODULE_NAME}Module {}
EOL

echo "Shell module for '$ROUTE_NAME' created successfully in 'src/app/$ROUTE_NAME/feature/$ROUTE_NAME-shell'."
