const chalk =require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    description: 'add a new note',
    builder: {
        title:{
            description: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
                description: 'note body',
                demandOption: true,
                type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
       
    }
})

yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder:{
        title:{
            command:'remove',
            description:'Remove a note',
            type:'string'

        }
    },
    handler(argv){
       notes.removeNotes(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command:'read',
    description:'read your notes',

    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
   
    handler(argv){
        notes.readNote(argv.title)
        
    }
})



yargs.parse();