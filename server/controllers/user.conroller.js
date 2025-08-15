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
        email: saved.email,
        Success:true
      };
}

export const allusers = async()=>{
    try{
           let users = await User.find();
           if(users.length === 0){
               return {message: "No users found"};
           }
           else{
            return users.map(user=>{
                return {
                    id: user._id,
                    name: user.username, // map here
                    email: user.email,
                    Success:true
                }
            })
           }

    }catch(err){
        return err;
    }
}
export const updateUser = async(id,name,email)=>{
    try{
          // check user exists or not
          let exist = await User.findById(id);
          if(!exist){
              return {message: "User not found"};
          }else{
            let updateuser = await User.findByIdAndUpdate(id, {username: name, email: email}, {new: true});
        
            return{
                    
                    name: updateuser.username, // map here
                    message:"Successfully updated user",
                    Success:true
            }
          }
    }catch(err){
        return err;
    }
}

export const deleteUser = async(id)=>{
    try{
       let check = await User.findById(id);
       if(!check){
           return {message: "User not found"};
        }
        else{
            let deleteuser = await User.findByIdAndDelete(id);
            return{
                name: deleteuser.username, // map here
                message: "Successfully deleted user",
                Success: true
            }
        }
    }catch(err){
        return err;
    }
}