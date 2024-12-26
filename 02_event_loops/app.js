const fs = require('fs');
console.log('Start read task');


const getText = (pass) =>{
    return new Promise((resolve, reject)=>{
        fs.readFile(pass, 'utf-8', (err, data)=>{
            err? reject(err):resolve(data);
        })
    })
}

getText('./app.js')
.then((result)=>{ console.log(result)})
.catch((err)=> {console.log(err);})


console.log('End first task');

