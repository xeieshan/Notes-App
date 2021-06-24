const utils = require("../utils.js");
const chalk = require("chalk");
const fs = require("fs");

const tasks = {
  getTasks(age) {
    const readDataJSON = fs.readFileSync("people.json");
    const readStringJSON = readDataJSON.toString();

    return JSON.stringify(JSON.parse(readStringJSON).filter((item) =>  item.age < age))
  },
};
utils.log(chalk.bgMagentaBright(tasks.getTasks(34)));
