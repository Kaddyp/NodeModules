const util = require('util');
const text = 'Welcome to %s the world, Kalyani %d';

const fullText = util.format(text, 'NodeJS', 1);
console.log(fullText);