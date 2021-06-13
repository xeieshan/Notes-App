const utils = require('../utils');
const fs = require('fs');
const me = {
    name: 'Zeeshan',
    class: 'Grade 2 C',
    age: 32
};

const dataJSON = JSON.stringify(me);
fs.writeFileSync('json.json',dataJSON);

const readDataJSON = fs.readFileSync('json.json');
const readStringJSON = readDataJSON.toString();
const readJSON = JSON.parse(readStringJSON);
readJSON.name = 'Zeeshan Haider';
readJSON.age = 33;
fs.writeFileSync('json.json',JSON.stringify(readJSON));
