import { getuserbyId, creatUser, allusers, updateUser } from "../controllers/user.conroller.js";

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
  allUsers:async()=>{
    return await allusers()
  }
};
