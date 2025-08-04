const fs = require("fs");

console.log("🔧 RUNTIME ADMIN PATCH STARTING");
console.log("Working directory:", process.cwd());

// Look for dashboard in current directory first, then in .medusa/server
const possiblePaths = [
  `${process.cwd()}/node_modules/@medusajs/dashboard/dist`,
  `${process.cwd()}/.medusa/server/node_modules/@medusajs/dashboard/dist`
];

let dashboardDistPath = null;
for (const path of possiblePaths) {
  console.log("Checking path:", path);
  if (fs.existsSync(path)) {
    dashboardDistPath = path;
    console.log("✓ Found dashboard at:", path);
    break;
  }
}

if (!dashboardDistPath) {
  console.log("❌ Dashboard dist folder not found in any location");
  process.exit(0);
}

const APP_MJS_PATH = `${dashboardDistPath}/app.mjs`;
console.log("APP_MJS_PATH:", APP_MJS_PATH);
console.log("APP_MJS exists:", fs.existsSync(APP_MJS_PATH));

// List files in dashboard dist
const distFiles = fs.readdirSync(dashboardDistPath);
console.log("Files in dashboard dist:", distFiles.slice(0, 10)); // Show first 10 files

const readFileAsLines = (filePath) => {
  let fileContent = fs.readFileSync(filePath, "utf8");
  return fileContent.split("\n");
};

const writeFile = (lines, filePath) => {
  fs.writeFileSync(filePath, lines.join("\n"), "utf8");
  console.log(`✓ Updated ${filePath} successfully.`);
};

const findChunkFileByContainingText = (text) => {
  try {
    const files = fs.readdirSync(dashboardDistPath);
    const targetFiles = files.filter(
      (file) => file.startsWith("chunk-") && file.endsWith(".mjs")
    );

    for (const fileName of targetFiles) {
      const filePath = `${dashboardDistPath}/${fileName}`;
      const content = fs.readFileSync(filePath, "utf8");

      if (content.includes(text)) {
        console.log(`✓ Found '${text}' in file: ${filePath}`);
        return filePath;
      }
    }
  } catch (error) {
    console.error("Error searching chunk files:", error);
  }
  return null;
};

try {
  // 1) Welcome to Medusa -> Welcome to myBoxNCase
  console.log("🔍 Looking for 'Welcome to Medusa' text...");
  const CHUNK_1 = findChunkFileByContainingText("Welcome to Medusa");
  if (CHUNK_1) {
    let lines = readFileAsLines(CHUNK_1);
    for (let i = 0; i < lines.length; i++) {
      lines[i] = lines[i].replace(/Welcome to Medusa/g, "Welcome to myBoxNCase");
    }
    writeFile(lines, CHUNK_1);
  } else {
    console.log("❌ Could not find chunk file containing 'Welcome to Medusa'");
  }

  // 2) Hide documentation and changelog links from menu  
  console.log("🔍 Looking for documentation/changelog menu items...");
  if (fs.existsSync(APP_MJS_PATH)) {
    let lines = readFileAsLines(APP_MJS_PATH);
    let modified = false;
    
    lines.forEach((line, index) => {
      if (line.includes("app.menus.user.documentation")) {
        console.log("✓ Found documentation menu item, removing...");
        lines[index - 3] = "";
        lines[index - 2] = "";
        lines[index - 1] = "";
        lines[index] = "";
        lines[index + 1] = "";
        modified = true;
      }

      if (line.includes("app.menus.user.changelog")) {
        console.log("✓ Found changelog menu item, removing...");
        lines[index - 2] = "";
        lines[index - 1] = "";
        lines[index] = "";
        lines[index + 1] = "";
        modified = true;
      }
    });
    
    if (modified) {
      writeFile(lines, APP_MJS_PATH);
    } else {
      console.log("ℹ️ No documentation or changelog menu items found to remove");
    }
  } else {
    console.log("❌ App.mjs not found");
  }

  console.log("✅ RUNTIME ADMIN PATCH COMPLETED");

} catch (error) {
  console.error("❌ Runtime admin patch failed:", error.message);
  process.exit(0); // Don't fail the startup
}