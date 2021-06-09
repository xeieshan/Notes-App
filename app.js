// const fs = require("fs");
// const utils = require("./utils.js");
// const add = require("./utils.js");
// const sum = add(1, 4);
// // fs.writeFileSync("notes.txt", "My name is Zeeshan.");
// // fs.appendFileSync("notes.txt", "\nBro!!");
// // fs.appendFileSync("notes.txt", "\nNah!!");
// console.log(sum);

const validator = require('validator');
const chalk = require('chalk');
const getNotes = require("./notes.js");
const msg = getNotes();
const utils = require("./utils.js");
utils.log(chalk.green.bgWhite.bold.inverse(msg));

utils.log(chalk.blue.inverse('isEmail: '),validator.isEmail('ss@ss.com'));
utils.log(chalk.red('isUrl: '),validator.isURL('http:test.com'));

const command = process.argv[2]
if (command === 'add') {
    utils.log(chalk.green.bgWhite.bold('Added Successfully!'));
} else if (command === 'remove') {
    utils.log(chalk.red.bgWhite.bold('Removed Successfully!'));
}
