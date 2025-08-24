import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    price:{
        type:Number,
    },
    Description:{
        type:String
    }
})

export const Product = mongoose.model("Product",productSchema);