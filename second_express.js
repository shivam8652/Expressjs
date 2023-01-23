const express = require('express');
const app = express();

app.get("",(req,res)=>{
    console.log("data sent by browser",req.query.name)
    res.send("Welcom, "+req.query.name);
});

app.listen(5000);