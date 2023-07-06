import mongoose from 'mongoose';


const userName='utkarsh2237';
const password='4lKVSUT2f6ScG6lq';
const dbName='StockManager';
const ConnectDb=async()=>{
    try{
        const conn= await mongoose.connect(
            `mongodb+srv://${userName}:${password}@cluster1.9yqmnpn.mongodb.net/${dbName}
        ?retryWrites=true&w=majority`,
        {
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log(conn.connection.host);
    }catch(err){
        console.log(err);
    }

}


export default ConnectDb;