//import path from 'path';

// Access a directory in the project root using process.cwd()
// let rootDirectoryPath = process.cwd();

let rootDirectoryPath = "/"

// Construct a path relative to the project root
//const filePath = path.join(rootDirectoryPath, 'webicon-config.cjs');

const filePath = "webicon-config.cjs"

//console.log(filePath)

const data = await import ("/"+filePath)

export default data 