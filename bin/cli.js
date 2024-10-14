#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoName = process.argv[2] || './';
const gitCheckoutCommand = `git clone https://github.com/berlinbruno/nextjs-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install -D rimraf && npm install`;

// Function to update the fields in package.json
function updatePackageJson(name, author, description) {
  if (name === './') {
    name = 'nextjs-starter'; // Default name if no argument is provided
  }
  const packageJsonPath = path.join(repoName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  packageJson.name = name; // Update the name field
  packageJson.version = '0.1.0'; // Set default version
  packageJson.author = author; // Set the author
  packageJson.description = description; // Set the description

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
}

function removeFieldFromPackageJson(field) {
  const packageJsonPath = path.join(repoName, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

  delete packageJson[field];

  fs.writeFileSync(
    packageJsonPath,
    JSON.stringify(packageJson, null, 2),
    'utf8'
  );
}

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
    execSync(command, {
      stdio: 'inherit',
    });
    return true;
  } catch (error) {
    console.error(`🛑 Error executing command: ${command}`, error);
    return false;
  }
}

console.log(`\nInitializing project '${repoName}' ✨`);
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.error('🛑 Failed to clone the repository. Exiting...');
  process.exit(-1);
}

console.log('\nInstalling dependencies... 🔥');
const installDeps = runCommand(installDepsCommand);
if (!installDeps) {
  console.error('🛑 Failed to install dependencies. Exiting...');
  process.exit(-1);
}

console.log(`\nUpdating name in package.json to: ${repoName}...`);
updatePackageJson(
  repoName,
  'Your Name',
  'A starter template for Next.js projects.'
); // Update author and description

fieldsToRemove.forEach((field) => {
  console.log(`\n🗑️ Removing field: ${field} from package.json...`);
  removeFieldFromPackageJson(field);
});

console.log('\nCleaning up unnecessary files... 🔥');
const cleaningFilesCommand = `npx rimraf ${repoName}/bin ${repoName}/.github/workflows/publish.yml ${repoName}/.release-it.json ${repoName}/CHANGELOG.md ${repoName}/.git ${repoName}/LICENSE`;

console.log(`\nExecuting cleanup command...`);
if (!runCommand(cleaningFilesCommand)) {
  console.error('🛑 Failed to clean up unnecessary files. Exiting...');
  process.exit(-1);
}

console.log('\nUninstalling development dependencies... 🔥');
const unInstallDepsCommand = `cd ${repoName} && npm uninstall rimraf --save-dev`;
if (!runCommand(unInstallDepsCommand)) {
  console.error('🛑 Failed to uninstall development dependencies. Exiting...');
  process.exit(-1);
}

console.log('🎉 Project setup complete!');

console.log('🚀 You are ready to go! Follow the steps below to get started:');
console.log(
  `\n- Rename the 'name', 'author', and 'description' fields in package.json to reflect your project.`
);
console.log(`- Update the site metadata in "constants/data.ts" for your app.`);
console.log(
  `- Create environment variables for dev (port: 3000) and prod (port: 4000) with "NEXT_PUBLIC_BASE_URL" for your app.`
);
console.log(`- Update the name in the LICENSE file.`);
console.log(
  `- Clean up the "README.md" file to provide relevant information about your project.\n`
);
console.log(`- Explore the project.\n`);

console.log('✨ Happy coding! ✨');
