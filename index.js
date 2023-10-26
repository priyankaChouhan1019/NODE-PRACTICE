//  "http"  node js ke andar server ki request or response ko handle krta hai 
const http = require('http');

http.createServer((req,res) =>{
    res.write("<h2>server is on </h2>");
    res.end();

}).listen(4500);


