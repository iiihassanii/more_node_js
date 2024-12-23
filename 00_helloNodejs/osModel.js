const os = require('os');

//console.log(os.userInfo());
//console.log(os.uptime());

const currentOs = {
    name: os.type(),
    release: os.release(),
    memory: os.totalmem(),
    freespace: os.freemem()
}

console.log(currentOs);


const path = require('path');
filepath = 'venus\\alexis\\file.txt';
console.log(path.basename(filepath)) //file.txt
console.log(path.join(__dirname,filepath));