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

// Copy and modify patch-admin.js for admin UI branding
const patchAdminPath = path.join(process.cwd(), 'patch-admin.js');
if (fs.existsSync(patchAdminPath)) {
  // Read the original patch script
  let patchContent = fs.readFileSync(patchAdminPath, 'utf8');
  
  // Replace __dirname with the correct path to the server directory
  // This ensures the patch script looks for node_modules in the right place
  patchContent = patchContent.replace(
    /\$\{__dirname\}/g, 
    `"${MEDUSA_SERVER_PATH}"`
  );
  
  // Write the modified script to the server directory
  fs.writeFileSync(
    path.join(MEDUSA_SERVER_PATH, 'patch-admin.js'),
    patchContent,
    'utf8'
  );
}

// Install dependencies
console.log('Installing dependencies in .medusa/server...');
execSync('npm ci --omit=dev', { 
  cwd: MEDUSA_SERVER_PATH,
  stdio: 'inherit'
});

// Apply admin UI branding patch
const patchAdminServerPath = path.join(MEDUSA_SERVER_PATH, 'patch-admin.js');
if (fs.existsSync(patchAdminServerPath)) {
  console.log('Applying admin UI branding patch...');
  console.log('Checking if dashboard dist exists...');
  const dashboardDistPath = path.join(MEDUSA_SERVER_PATH, 'node_modules/@medusajs/dashboard/dist');
  console.log('Dashboard dist path:', dashboardDistPath);
  console.log('Dashboard dist exists:', fs.existsSync(dashboardDistPath));
  
  if (fs.existsSync(dashboardDistPath)) {
    const distFiles = fs.readdirSync(dashboardDistPath);
    console.log('Files in dashboard dist:', distFiles.slice(0, 10)); // Show first 10 files
  }
  
  try {
    execSync('node patch-admin.js', { 
      cwd: MEDUSA_SERVER_PATH,
      stdio: 'inherit'
    });
    console.log('Admin UI branding patch applied successfully!');
  } catch (error) {
    console.log('Admin UI branding patch failed, continuing without it:', error.message);
    console.log('Error details:', error);
  }
} else {
  console.log('patch-admin.js not found in server directory');
}
