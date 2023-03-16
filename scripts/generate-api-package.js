const packageJson = require('../package.json');
const fs = require('fs');
const deps = packageJson['apiDependencies'];

// Template of package.json for Firebase Functions
const firebaseFunctionsPackageJson = {
  main: 'main.js',
  engines: { node: '14' },
  dependencies: deps.reduce((acc, cur) => {
    acc[cur] = packageJson.dependencies[cur];
    return acc;
  }, {})
};

const path = 'dist/apps/api/package.json';
fs.writeFileSync(path, JSON.stringify(firebaseFunctionsPackageJson));

console.log(`API package.json written successfully.`);