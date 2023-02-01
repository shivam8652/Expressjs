const express = require('express');
const app = express();
require('./congig');
const Products = require('./product');


app.use(express.json());

app.post('/create',async (req,res)=>{
    let data = new Products(req.body);
    let result = await data.save();
    console.log(result)
    res.send(result);
});

app.get('/list',async (req,res)=>{
    let data = await Products.find();
    res.send(data);
});

app.delete('/delete/:_id',async (req,res)=>{
    let data = await Products.deleteOne(req.params);
    res.send(data);
});

app.put('/update/:_id',async (req,res)=>{
    let data = await Products.updateOne(
        req.params,
        {
           $set:req.body
        }
        );
    res.send(data);
});

app.get('/search/:key',async (req,res)=>{

    let data = await Products.find(
        {
            "$or":[{"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
            {"category":{$regex:req.params.key}} ]
        }
    );
    res.send(data);
});

app.listen(5000);
