// const fs = require("fs");
// const utils = require("./utils.js");
// const add = require("./utils.js");
// const sum = add(1, 4);
// // fs.writeFileSync("notes.txt", "My name is Zeeshan.");
// // fs.appendFileSync("notes.txt", "\nBro!!");
// // fs.appendFileSync("notes.txt", "\nNah!!");
// console.log(sum);
const yargs = require("yargs");
const validator = require('validator');
const chalk = require("chalk");
const notes = require("./notes.js");
const msg = notes.getNote();
const utils = require("./utils.js");
utils.log(chalk.green.bgWhite.bold.inverse(msg));

utils.log(chalk.blue.inverse('isEmail: ' + validator.isEmail('ss@ss.com')));
utils.log(chalk.red('isUrl: ' + validator.isURL('http:test.com')));

// const command = process.argv[2]
// utils.log(process.argv);
yargs.version('1.1.0');
// Add Command 
yargs.command({
  command: 'add',
  describe: 'This will add',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (s) {
    utils.log("add handler");
    notes.addNote(s.title, s.body);
  },
});

// Remove Command
yargs.command({
  command: "remove",
  describe: "This will remove",
  handler: function () {
    utils.log("Removing Note");
  },
});

// Create Command
yargs.command({
  command: "list",
  describe: "This will list all note",
  handler: function () {
    utils.log("List all Note");
  },
});

// Read Command
yargs.command({
  command: "read",
  describe: "This will read a note",
  handler: function () {
    utils.log("Read a Note");
  },
});

// utils.log(yargs.argv);

// if (command === 'add') {
//     utils.log(chalk.green.bgWhite.bold('Added Successfully!'));
// } else if (command === 'remove') {
//     utils.log(chalk.red.bgWhite.bold('Removed Successfully!'));
// }
