const express = require('express');
const app = express();

const reqFilter = (req,res,next)=>{

if(!req.query.age){

    res.send("pleas provide age");

}
else if(req.query.age<18){

    res.send("you cannot access this page");
}
else{
    next();
}

}

app.use(reqFilter)

app.get("/",(req,res)=>{

    res.send("Welcome to home page");
});

app.get("/users",(req,res)=>{

    res.send("Welcome to the user page");
});


app.listen(5000);