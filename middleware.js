const express = require('express');
const app = express();
const route = express.Router();

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

//app.use(reqFilter)
route.use(reqFilter);

app.get("/",(req,res)=>{

    res.send("Welcome to home page");
});

app.get("/users",(req,res)=>{

    res.send("Welcome to the user page");
});

route.get("/about",(req,res)=>{

    res.send("Welcome to the about page");
});

route.get("/contact",(req,res)=>{

    res.send("Welcome to the contact page");
});

app.use("/",route);

app.listen(5000);