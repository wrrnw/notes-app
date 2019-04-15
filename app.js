const chalk = require('chalk')
const yargs = require('yargs')
const notes = require("./notes.js")

// Customise yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'String'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'String'
    }
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log('Removing the note')
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'list the content of note',
  handler: function () {
    console.log('List the content of note')
  }
})


yargs.command({
  command: 'read',
  describe: 'describe the note',
  handler: function () {
    console.log('Read the content')
  }
})

// add, remove, read, list



console.log(yargs.argv)
