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
COMPONENT_NAME=$2
CAMEL_CASE_NAME=$(convert_to_camel_case $COMPONENT_NAME)
CAMEL_COMPONENT_NAME="${CAMEL_CASE_NAME}Component"
CAMEL_MODULE_NAME="${CAMEL_CASE_NAME}Module"

# Define the base path
COMPONENT_PATH="src/app/$ROUTE_NAME/ui/$COMPONENT_NAME"

# Create the component directory
mkdir -p $COMPONENT_PATH

# Create the component files
cat <<EOL > $COMPONENT_PATH/$COMPONENT_NAME.component.html
EOL

cat <<EOL > $COMPONENT_PATH/$COMPONENT_NAME.component.scss
EOL

cat <<EOL > $COMPONENT_PATH/$COMPONENT_NAME.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'tm-$COMPONENT_NAME',
  templateUrl: './$COMPONENT_NAME.component.html',
  styleUrls: ['./$COMPONENT_NAME.component.scss']
})
export class $CAMEL_COMPONENT_NAME {}
EOL

cat <<EOL > $COMPONENT_PATH/$COMPONENT_NAME.module.ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { $CAMEL_COMPONENT_NAME } from './$COMPONENT_NAME.component';

@NgModule({
  imports: [CommonModule],
  declarations: [$CAMEL_COMPONENT_NAME],
  exports: [$CAMEL_COMPONENT_NAME],
})
export class $CAMEL_MODULE_NAME {}
EOL

echo "Component '$COMPONENT_NAME' created successfully in 'src/app/$ROUTE_NAME/ui/$COMPONENT_NAME'."
