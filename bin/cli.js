#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoName = process.argv[2] || './';
const gitCheckoutCommand = `git clone https://github.com/berlinbruno/nextjs-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install -D rimraf && npm install`;

// Function to update the "name" field in package.json
function updateNameInPackageJson(newName) {
  if (newName == './') {
    newName = 'nextjs-starter'; // Default name if no argument is provided
  }
  const packageJsonPath = path.join(repoName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.name = newName; // Update the name field
  packageJson.version = '0.1.0'; // Set default version
  packageJson.author = 'your name'; // Prompt for author
  packageJson.description = 'your description'; // Prompt for description

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
}

// Function to remove fields from package.json
function removeFieldFromPackageJson(field) {
  const packageJsonPath = path.join(repoName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  delete packageJson[field]; // Remove specified field

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
}

// Create an array of fields to remove from package.json
const fieldsToRemove = [
  'publishConfig',
  'repository',
  'bin',
  'homepage',
  'bugs',
  'keywords',
  'license',
  'main',
];

function runCommand(command) {
  try {
    execSync(command, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
    return false;
  }
}

console.log(`Initializing project '${repoName}' ✨`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.error('Failed to clone the repository. Exiting...');
  process.exit(-1);
}

console.log('Installing dependencies...🔥');
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  console.error('Failed to install dependencies. Exiting...');
  process.exit(-1);
}

// Update the "name" field in package.json
console.log(`Updating name in package.json to: ${repoName}...`);
updateNameInPackageJson(repoName);

// Remove the specified fields from package.json
fieldsToRemove.forEach((field) => {
  console.log(`Removing field: '${field}' from package.json...`);
  removeFieldFromPackageJson(field);
});

// Cleaning up unnecessary files
console.log('Cleaning up unnecessary files...🔥');
const cleaningFilesCommand = `npx rimraf ${repoName}/bin ${repoName}/.github/workflows/publish.yml ${repoName}/.release-it.json ${repoName}/CHANGELOG.md ${repoName}/.git ${repoName}/LICENSE`;

// Log the command for debugging purposes
console.log(`Executing cleanup command`);

// Run the cleaning command and check for success
if (!runCommand(cleaningFilesCommand)) {
  console.error('Failed to clean up unnecessary files. Exiting...');
  process.exit(-1);
}

console.log('Uninstalling development dependencies...🔥');
const unInstallDepsCommand = `cd ${repoName} && npm uninstall rimraf --save-dev`;
if (!runCommand(unInstallDepsCommand)) {
  console.error('Failed to uninstall development dependencies. Exiting...');
  process.exit(-1);
}

console.log('Project setup complete! 🎉');

// Provide additional instructions
console.log('SaxX! You are ready. Follow the following commands to start 🚀');
console.log('');
console.log(`Make sure you follow the steps below to start fresh:`);
console.log(
  `- Rename the 'name', 'author', and 'description' fields in package.json to reflect your project.`
);
console.log(`- Change the title and description in "layout.tsx" for your app.`);
console.log(
  `- Clean up the "README.md" file to provide relevant information about your project.`
);
