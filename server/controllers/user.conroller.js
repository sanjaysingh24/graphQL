import { assertCompositeType } from "graphql";
import { User } from "../models/user.model.js";


export const getuserbyId =async(id)=>{
  
    let save = await User.findById(id);
    return{
        id: save._id,
        name: save.username, // map here
        email: save.email
    }
    console.log("User found:", save);
}
export const creatUser =async(name,email)=>{
    const user = new User({username: name, email: email});
     const saved = await user.save();
      return {
        id: saved._id,
        name: saved.username, // map here
        email: saved.email
      };
}