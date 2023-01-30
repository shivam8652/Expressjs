const dbConnect = require('./mongodb');

const update = async ()=>{
 let data = await dbConnect();
 let result = await data.updateOne({name:'max5'},
 {
    $set:{name:'max1'}
});
 if (result.acknowledged){
    console.log("updated")
 }
}


update();