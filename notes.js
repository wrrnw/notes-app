const fs = require('fs');

const getNotes = function() {
  return  "Your notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log('New note added!');
  } else {
    console.log('Note title taken!');
  }
};

const saveNotes = function(notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = function() {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  var i = undefined;
  const titleExist = notes.filter(function(note, index) {
    if (note.title === title) {
      i = index;
      return true;
    }
  });
  if (titleExist.length > 0) {
    const removedNote = notes.splice(i, 1);
    console.log("Removed note is " + JSON.stringify(removedNote));
    saveNotes(notes);
  } else {
    console.log("Note title doesn't exist!");
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
