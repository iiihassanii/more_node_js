import fs, { readFile, writeFile } from 'fs/promises';
import util from 'util';

//const readfileutil = util.promisify(readFile)
//const writefileutil = util.promisify(writeFile)
//
//try {
//    const fileContent = await readfileutil('./app.js', 'utf-8');
//    console.log(fileContent);
//} catch (err) {
//    console.error('Error reading file:', err);
//}

try {
    const fileContent1 = await readFile('./app.js', 'utf-8');
    console.log(fileContent1);
} catch (err) {
    console.error('Error reading file:', err);
}
