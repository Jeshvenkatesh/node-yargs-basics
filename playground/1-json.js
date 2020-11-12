const fs = require('fs');

const book = {
    title : "This is Title",
    author: "This is author"
}

console.log(book.title);

const stringJSON = JSON.stringify(book);

// write a json object in a file

fs.writeFileSync('notes.json', stringJSON);

// read a file

const dataBuffer = fs.readFileSync('notes.json');

// convert buffer to string

const dataString = dataBuffer.toString();

console.log(dataString);

// convert string to JSON object

const dataJson = JSON.parse(dataString);

console.log(dataJson.author);



