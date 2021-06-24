const fs = require("fs");
const chalk = require("chalk");
const utils = require("./utils");

const getNotes = function () {
  return "!!!!!!SUCCESS!!!!!!";
};

const addNotes = function (title, description) {
  const notes = loadNotes();

  const found = notes.filter((note) => {
    return note.title === title;
  });

  if (found.length === 0) {
    notes.push({
      title: title,
      description: description,
    });
    saveNote(notes);
    utils.log(chalk.green("Adding to Notes"));
    utils.log("Title: " + title);
    utils.log("Description: " + description);
  } else {
    utils.log(chalk.red("Same '" + title + "' already exist in notes!\n"));
  }
};

const removeNotes = function (title) {
  var notes = loadNotes();

  const index = notes.findIndex((note) => {
    return note.title === title;
  });

  if (index === -1) {
    utils.log(chalk.red("Title '" + title + "' doesn't exist in notes!\n"));
  } else {
    notes.splice(index, 1);
    saveNote(notes);
    utils.log(chalk.green("Removing Note with title: '" + title + "'" ));
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
module.exports = {
  getNote: getNotes,
  addNote: addNotes,
  removeNote: removeNotes,
};
