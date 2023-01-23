const express = require('express');
const app = express();

app.get('',(req,res)=>{
      res.send('Hello world');
});

app.get('/about',(req,res)=>{
   res.send('this is about us page');
});

app.get('/help',(req,res)=>{
    res.send('this is help page');
 });

app.listen(4500);
