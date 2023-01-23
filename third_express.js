const express = require('express');
const app = express();

app.get("",(req,res)=>{

    const data = req.query.name == undefined ? "" : req.query.name
    res.send(`
    <input type="text" placeholder="user" value='${data}'>
    <button>Click Me</Button>
    <a href='/help'>go to help</a>
    
    `);

});

app.get("/help",(req,res)=>{

  res.send(JSON.stringify(
    [
        {
            name:'shivam',
            email:'shivam@test.com'
        },
        {
            name:'pawan',
            email:'pawan@test.com'
        }
    ]
  ));

});

app.listen(5000);