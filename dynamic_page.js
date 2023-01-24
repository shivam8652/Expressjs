const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname,'public');

app.set('view engine','ejs');

app.get("",(_,res)=>{

    res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile",(_,res)=>{
    const user = {name:"shivam rai",email:"raishivam223@gmail.com",city:"mumbai"};
    res.render('profile',{user});
});

app.get("/about",(_,res)=>{

    res.sendFile(`${publicPath}/about.html`);
});

app.get("*",(_,res)=>{

    res.sendFile(`${publicPath}/404.html`);
});

app.listen(5000);