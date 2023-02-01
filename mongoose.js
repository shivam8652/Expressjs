const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/e-comm');

const ProductSchema = new mongoose.Schema({
       name:String,
       price:Number,
       brand:String,
       category:String
});

const saveInDB = async ()=>{
    
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = new ProductsModel({name:"Note Pro",price:250,brand:"maxx",category:"mobile"});
    let result = await data.save();
    console.log(result);
}

const updateInDB = async ()=>{

    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.updateOne({
        name : 'Note Pro'},
        {
            $set:{price:350,name:'Note pro'}
        });

        console.log(data);

}
const deleteInDB = async ()=>{
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.deleteOne({name:'Note pro'});
    console.log(data);

}

const findInDB = async ()=>{
    const ProductsModel = mongoose.model('products',ProductSchema);
    let data = await ProductsModel.find({name:"m8"});
    console.log(data);

}

findInDB();