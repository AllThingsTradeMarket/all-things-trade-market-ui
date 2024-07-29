#!/bin/bash

# Check if route name is provided
if [ -z "$1" ]; then
  echo "Error: No route name provided"
  echo "Usage: npm run add-route <route-name>"
  exit 1
fi

# Assign the first argument as the route name
ROUTE_NAME=$1

# Define the base path
BASE_PATH="src/app/$ROUTE_NAME"

# Define the folder structure
FOLDERS=(
  "$BASE_PATH/data-access"
  "$BASE_PATH/feature"
  "$BASE_PATH/ui"
  "$BASE_PATH/utils"
)

# Create the folders
for folder in "${FOLDERS[@]}"; do
  mkdir -p $folder
done

echo "Folder structure for '$ROUTE_NAME' created successfully under src/app."
