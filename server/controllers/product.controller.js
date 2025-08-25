import { Product } from "../models/product.model.js";

export const addProduct = async(name,price,description)=>{
console.log(name,price,description);
    try{
      let product = new Product({name,price,description});
      
        let saved = await product.save();
        return {
            name:saved.name,
            message:"Product added successfully",
            Success:true
        }
    }catch(err){
           return{
            message: err.message,
            Success:false
           }
    }
}