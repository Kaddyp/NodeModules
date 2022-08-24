const url = require('url');;
const addr = 'http://localhost:8080/default.html?year=2015&month=july';
const parsedUrl = url.parse(addr, true);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);