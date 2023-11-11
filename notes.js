const fs = require('fs')
const { array } = require('yargs')
const chalk = require('chalk')

const getNotes = function () {
    return 'Your notes...'
}

const addNote = (title, body) =>{
    const notes = loadNotes()
   const duplicateNote = notes.find((note)=>{note.title === title})
    //const duplicateNotes = notes.filter((note)=>{note.title === title})
    
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    // if (duplicateNotes.length === 0) {
        if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.green.inverse('Note title taken!'))
    }
}

//wire up remove notes
// 1. Load existing notes
// 2. use array filter method to remove the maching  note(if any)
// 3. save the newly created array
// 4. test you work with title
const removeNotes = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>{
        return note.title !== title;
    })

    if(notes.length > notesToKeep.length){
        saveNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed'))
    } else{
        console.log(chalk.red.inverse('No note found'))
    }

}

const listNotes =()=>{
    const notes = loadNotes()

    console.log(chalk.inverse('your notes'))

    notes.forEach(note => {
        console.log("title :" +note.title + "  description :" +note.body)
        
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if (note) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('Note not found!'))
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNote: readNote
}