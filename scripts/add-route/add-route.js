const fs = require('fs');
const path = require('path');

// Check if route name is provided as the first argument
if (process.argv.length < 3) {
  console.error('Error: No route name provided');
  console.log('Usage: npm run add-route <route-name>');
  process.exit(1);
}

// Assign the first argument as the route name
const routeName = process.argv[2];

// Define the base path
const basePath = path.join('src', 'app', routeName);

// Define the folder structure
const folders = [
  path.join(basePath, 'data-access'),
  path.join(basePath, 'feature'),
  path.join(basePath, 'ui'),
  path.join(basePath, 'utils'),
];

// Create the folders
folders.forEach(folder => {
  fs.mkdirSync(folder, { recursive: true });
});

console.log(`Folder structure for '${routeName}' created successfully under src/app.`);
