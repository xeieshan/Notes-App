// const fs = require("fs");
// const utils = require("./utils.js");
// const add = require("./utils.js");
// const sum = add(1, 4);
// // fs.writeFileSync("notes.txt", "My name is Zeeshan.");
// // fs.appendFileSync("notes.txt", "\nBro!!");
// // fs.appendFileSync("notes.txt", "\nNah!!");
// console.log(sum);

const getNotes = require("./notes.js");
const msg = getNotes();
const utils = require("./utils.js");
utils.log(msg);

const validator = require('validator');

console.log('isEmail: ',validator.isEmail('ss@ss.com'));
console.log('isUrl: ',validator.isURL('http:test.com'));