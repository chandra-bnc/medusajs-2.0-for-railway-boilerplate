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

// Copy patch-admin.js to server directory and run it directly
const patchAdminPath = path.join(process.cwd(), 'patch-admin.js');
if (fs.existsSync(patchAdminPath)) {
  console.log('Copying admin patch script...');
  fs.copyFileSync(patchAdminPath, path.join(MEDUSA_SERVER_PATH, 'patch-admin.js'));
  
  // Run the patch script directly after dependencies are installed
  console.log('Running admin patch script...');
  try {
    execSync('node patch-admin.js', { 
      cwd: MEDUSA_SERVER_PATH,
      stdio: 'inherit'
    });
    console.log('Admin patch script completed successfully');
  } catch (error) {
    console.error('Admin patch script failed:', error.message);
    // Don't fail the build if patching fails
  }
} else {
  console.log('patch-admin.js not found, skipping admin patching');
}
