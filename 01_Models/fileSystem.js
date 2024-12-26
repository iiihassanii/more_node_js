const fs = require('fs');


let fileContent = fs.readFileSync('./textToRead.txt', 'utf-8');
fs.writeFileSync('./textWrite.txt', fileContent, {flag: 'a'});
let readWriteFile = fs.readFileSync('./textWrite.txt', 'utf-8');
console.log(fileContent);
console.log(readWriteFile);

fs.readFile('./textToRead.txt', 'utf-8', (whatever, result)=>{
    console.log('#####################');
    if (whatever)
    {
        console.log(whatever);
    }else{
        console.log(result);
    }
})