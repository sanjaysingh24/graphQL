import { addProduct } from "../controllers/product.controller.js";
import { getuserbyId, creatUser, allusers, updateUser, deleteUser } from "../controllers/user.conroller.js";

// The keys here must match schema function names exactly
export const resolvers = {
  getUser: async ({ id }) => {
    return await getuserbyId(id);
  },
  createUser: async ({ name, email }) => {
    return await creatUser(name, email);
  },
  updateUser:async({id,name,email})=>{
    return await updateUser(id,name,email);
  },
  deleteUser:async({id})=>{
    return await deleteUser(id);
  },
  allUsers:async()=>{
    return await allusers()
  },
  addproduct:async({name,price,description})=>{
    return await addProduct(name,price,description)
  }
  
};
