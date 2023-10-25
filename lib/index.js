#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Access a directory in the project root using process.cwd()
let rootDirectoryPath = process.cwd();

console.log(rootDirectoryPath)


// Construct a path relative to the project root
const filePath = path.join(rootDirectoryPath, 'webicon-config.cjs');


//console.log(filePath)

//const data = await import(filePath);

const data = require(filePath);
console.log(data);


const outputPath = path.join(rootDirectoryPath, 'node_modules','webiconjs','data.js');

// check if the ESM translated file exists
if (fs.existsSync(outputPath)) {
    // if it does, delete it
    fs.unlinkSync(outputPath);
}


// write the ESM translated file

fs.writeFileSync(outputPath, `export default ${JSON.stringify(data)}`);