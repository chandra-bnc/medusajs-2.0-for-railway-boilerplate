const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const MEDUSA_SERVER_PATH = path.join(process.cwd(), '.medusa', 'server');

// Check if .medusa/server exists - if not, build process failed
if (!fs.existsSync(MEDUSA_SERVER_PATH)) {
  throw new Error('.medusa/server directory not found. This indicates the Medusa build process failed. Please check for build errors.');
}

// Copy package-lock.json
fs.copyFileSync(
  path.join(process.cwd(), 'package-lock.json'),
  path.join(MEDUSA_SERVER_PATH, 'package-lock.json')
);

// Copy .npmrc
fs.copyFileSync(
  path.join(process.cwd(), '.npmrc'),
  path.join(MEDUSA_SERVER_PATH, '.npmrc')
);

// Copy .env if it exists
const envPath = path.join(process.cwd(), '.env');
if (fs.existsSync(envPath)) {
  fs.copyFileSync(
    envPath,
    path.join(MEDUSA_SERVER_PATH, '.env')
  );
}

// Install dependencies
console.log('Installing dependencies in .medusa/server...');
execSync('npm ci --omit=dev', { 
  cwd: MEDUSA_SERVER_PATH,
  stdio: 'inherit'
});

// Copy patch-admin.js to server directory
const patchAdminPath = path.join(process.cwd(), 'patch-admin.js');
if (fs.existsSync(patchAdminPath)) {
  console.log('Copying admin patch script...');
  fs.copyFileSync(patchAdminPath, path.join(MEDUSA_SERVER_PATH, 'patch-admin.js'));
  
  // Add postinstall script to server package.json to run the patch after dependencies are installed
  const serverPackageJsonPath = path.join(MEDUSA_SERVER_PATH, 'package.json');
  if (fs.existsSync(serverPackageJsonPath)) {
    const serverPackageJson = JSON.parse(fs.readFileSync(serverPackageJsonPath, 'utf8'));
    if (!serverPackageJson.scripts) {
      serverPackageJson.scripts = {};
    }
    serverPackageJson.scripts.postinstall = 'node patch-admin.js';
    fs.writeFileSync(serverPackageJsonPath, JSON.stringify(serverPackageJson, null, 2));
    console.log('Added postinstall script to server package.json');
  }
} else {
  console.log('patch-admin.js not found, skipping admin patching setup');
}
