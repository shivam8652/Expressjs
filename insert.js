const dbConnect = require('./mongodb');

const insert = async ()=>{

    const db = await dbConnect();
    const result = await db.insertMany(
        [

        
        {
            name : 'max',
            brand : 'micromax',
            price : 350,
            category: 'mobile'
        },
        {
            name : 'max1',
            brand : 'micromax',
            price : 350,
            category: 'mobile'
        }
    ]
    );
    if(result.acknowledged ){
        console.log("inserted");
    }
}

insert();