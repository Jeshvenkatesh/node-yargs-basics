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

console.log(yargs.argv);
console.log(yargs.argv.title);
console.log(yargs.argv.body);
console.log(yargs.argv['title']);
console.log(yargs.argv['body']);

yargs.command({
    command: 'add',
    description: 'Add a note',
    handler: function(){
        console.log('Hey did you call me ? ok I ll add a note for you')
    }
});

yargs.command({
    command:"remove",
    description:"remove a note",
    handler: ()=>{
        console.log("I will remove this note for you")
    }
})

// console.log(yargs.argv)
yargs.parse();     // Important command to remmember...It will note print everything...

//node app add
//node app --help
//node app remove



