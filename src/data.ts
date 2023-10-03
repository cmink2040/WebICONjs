const path = require('path');

// Access a directory in the project root using process.cwd()
const rootDirectoryPath = process.cwd();

// Construct a path relative to the project root
const filePath = path.join(rootDirectoryPath, 'webicon-config.js');

console.log(filePath)

export const data = require( filePath);