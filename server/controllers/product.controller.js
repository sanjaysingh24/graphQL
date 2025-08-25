import { Product } from "../models/product.model.js";

export const addProduct = async(name,price,description)=>{

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

export const getAllproducts = async()=>{
    try{
        let products = await Product.find();
        console.log(products);
        if(products.length>0){
            return products.map(product=>{
                return {
                    name: product.name,
                    price: product.price,
                    description: product.description,
                    Success:true,
                    message:"Products fetched successfully"
                }
            })
        }
        else{
            return {message: "No products found", Success:false};
        }
    }catch(err){

        return {
            message:"Something went wrong",
            Success:false
        }
    }
}