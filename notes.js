const fs = require("fs");
const chalk = require("chalk");
const utils = require("./utils");

const getNotes = function () {
  return "!!!!!!SUCCESS!!!!!!";
};

const addNotes = function (title, body) {
  utils.log("AddNote Method");
  const notes = loadNotes();

  const found = notes.filter((note) => {
    note.title === title;
  });
  const length = found.length ;
  debugger;
  if (found.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    utils.log(chalk.red("Adding to Notes\n"));
    utils.log("Title: " + title);
    utils.log("Body: " + body);
    utils.log(chalk.black(notes));
  } else {
    utils.log(chalk.red("Same title already exist in notes!\n"));
  }
};

const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = { getNote: getNotes, addNote: addNotes };
