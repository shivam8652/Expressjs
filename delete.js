const dbConnect = require('./mongodb');

const deletes = async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne({name:'nord5'});
    if(result.acknowledged){
        console.log("deleted");
    }
}
deletes();
