const fs = require('fs');
console.log('Start read task');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            reject(new Error(`الملف غير موجود: ${path}`));
            return;
        }

        fs.readFile(path, 'utf-8', (err, data) => {
            err ? reject(err) : resolve(data);
        });
    });
}

getText('./app.js')
    .then((result) => { console.log(result) })
    .catch((err) => { console.log(err); })

console.log('End first task');

