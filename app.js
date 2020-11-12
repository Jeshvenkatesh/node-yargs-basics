// const command = process.argv[2];

// if(command){
//     console.log("Ok I get it")
// }else{
//     console.log("I dont know what do you want from me")
// }

// console.log(process.argv);

// console.log(process.argv[3]);
// console.log(process.argv[4])

//--------------------yargs - package---------------

const yargs = require('yargs');

yargs.version('1.0.0');

//node app --version
//node app --help

// console.log(yargs.argv);
// console.log(yargs.argv.title);
// console.log(yargs.argv.body);
// console.log(yargs.argv['title']);
// console.log(yargs.argv['body']);

yargs.command({
    command: 'add',
    description: 'Add a note',
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type:"string"
        }
    },
    handler: (argv)=>{
           console.log('Title : ' + argv.title);
           console.log('Body : ' + argv.body);
    }
       
});

yargs.command({
    command:"remove",
    description:"remove a note",
    builder: {
        title:{
            describe : "remove title",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv)=>{
        console.log("Title : " + argv.title);
        console.log("Body : " + argv.body);

    }
});

yargs.command({
    command:"list",
    description:"list all notes",
    handler: ()=>{
        console.log("I will add list for you")
    }
});

yargs.command({
    command:"read",
    description:"read all notes",
    handler: ()=>{
        console.log("I will read a note")
    }
})

// console.log(yargs.argv)
yargs.parse();     // Important command to remmember...It will note print everything...

//node app add
//node app --help
//node app remove



