import fs from 'fs';

const getText = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

try {
    const fileContent = await getText('./app.js');
    console.log(fileContent);
} catch (err) {
    console.error('Error reading file:', err);
}
