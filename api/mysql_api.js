const express = require('express');
const conn = require('../config');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    conn.query("select * from user",(err,result)=>{
     if(err){
        res.send("error");
     }else{
        res.send(result);
     }
    });

});

app.post('/',(req,res)=>{
   
  const data = req.body;
  conn.query('insert into user SET ?',data,(err,result,fields)=>{
    if(err) throw err;
    res.send(result);
  });

});

app.put('/:id',(req,res)=>{
    const data = [req.body.name,req.body.password,req.body.user_type,req.params.id];
    conn.query("update user SET name=?,password=?,user_type=? where id = ?",data,(err,result,fields)=>{
        if(err) throw err;
        res.send(result);
    });
});

app.delete('/:id',(req,res)=>{
   const id = req.params.id;
   conn.query("Delete from user where id =" + req.params.id,(result)=>{
   
    res.end(result);
   });
});
app.listen(5000);