const utils = require('../utils');
const fs = require('fs');
const chalk = require('chalk');
const book = {
    title: 'My First Book',
    author: 'Zeeshan Holiday'
};
utils.log(book);
utils.log(book.title);

const bookJSON = JSON.stringify(book)
utils.log(chalk.red(bookJSON));
fs.writeFileSync('1-json.json',bookJSON);
const data = fs.readFileSync('1-json.json');
// utils.log(data)
const dataJSON = data.toString();
const data1 = JSON.parse(data);
utils.log(chalk.blue(data1.title));
// utils.log(bookJSON['title']);
