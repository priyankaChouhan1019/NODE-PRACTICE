const express = require('express');
const app = express();

// below reqFilter accepts three parameters
const reqFilter = (req, resp, next)=>{
   if(!req.query.age){
      resp.send("Please provide age")
   } else if (req.query.age < 18){
      resp.send("you are under age")
   } else{
      next();
   }
}

   app.use(reqFilter);

   app.get('/', (req, resp)=>{
      resp.send("Welcome to home page")

   })

   app.get('/user', (req, resp)=>{
      resp.send("Welcome to user page")
   })

   app.listen(5000)

