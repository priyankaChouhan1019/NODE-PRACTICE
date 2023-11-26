const express = require('express');
const path = require('path');

const app = express();
const publicPath=path.join(__dirname,'public')
app.set('view engine', 'ejs');

app.get('/about', (req, res)=>{
   res.sendFile(`${publicPath}/about.html`)
})

app.get('/help', (req, res)=>{
   res.sendFile(`${publicPath}/help.html`)
})

app.get('*', (req, res)=>{
   res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);
// console.log("dfdsfsdfds")