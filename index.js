// Required File system module to work with files
// CRUD Using fs module

const fs= require('fs')


fs.mkdirSync("Ashish");
// Create File
fs.writeFileSync("Ashish/bio.txt", "My Name is Ashish and learning Node js");
// Update File
fs.appendFileSync("Ashish/bio.txt", "I am also an engineering Student");

// Read File
const as= fs.readFileSync("Ashish/bio.txt", 'utf-8');
console.log(as);

fs.renameSync("Ashish/bio.txt", "Ashish/biodata.txt")
// Delete File
fs.unlinkSync("Ashish/biodata.txt");


