const fs = require('fs');

let list = fs.readFileSync(`${__dirname}/list.txt`);
list = list.toString();
list = list.split('\n');


console.log(JSON.stringify(list));