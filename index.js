const express = require('express');
const app = express();
const reqFilter = require('./middleware')
//2nd way
const route = express.Router();
route.use(reqFilter);

// if we don't have to apply route do we will use app.get , otherwise rotue.get

//1st way
//app.use(reqFilter);

   app.get('/', (req, resp)=>{
      resp.send("Welcome to home page")

   })
 // route level middleware
 //1st way  
   // app.get('/user',reqFilter, (req, resp)=>{
   //    resp.send("Welcome to user page")
   // })

   //2nd way
   route.get('/user', (req, resp)=>{
          resp.send("Welcome to user page")
    })

   app.get('/about', (req, resp)=>{
      resp.send("Welcome to about page")
   })

   //2nd way
   app.use('/', route);

   app.listen(5000)

