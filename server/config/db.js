import mongoose from "mongoose";


export const connectDb = async()=>{
    try{
        const connect  = await mongoose.connect('mongodb://localhost:27017/graphqldb')
        console.log('database is connected');
    }catch(err){
        console.log('database is not connected',err);
    }
}