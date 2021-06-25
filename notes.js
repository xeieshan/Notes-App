const fs = require("fs");
const chalk = require("chalk");
const utils = require("./utils");

const addNotes = (title, description) => {
  const notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (!note) {
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

const removeNotes = (title) => {
  var notes = loadNotes();

  const index = notes.findIndex((note) => note.title === title);

  if (index === -1) {
    utils.log(chalk.red("Title '" + title + "' doesn't exist in notes!\n"));
  } else {
    notes.splice(index, 1);
    saveNote(notes);
    utils.log(chalk.green("Removing Note with title: '" + title + "'" ));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  utils.log(chalk.red('Your notes:'))
  notes.forEach((note, i) => {
    utils.log(chalk.magenta(i + '. ' + note.title));
    utils.log(chalk.magenta('Description: ' + note.description));
  });
};

const readNotes = (title) => {
  var notes = loadNotes();

  const note = notes.find((note) => note.title === title);

  if (!note) {
    utils.log(chalk.red("Title '" + title + "' doesn't exist in notes!\n"));
  } else {
    utils.log(chalk.magenta('Title: ' + note.title));
    utils.log(chalk.magenta('Description: ' + note.description));
  }
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNote: addNotes,
  removeNote: removeNotes,
  listNote: listNotes,
  readNote: readNotes
};
