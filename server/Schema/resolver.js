
import { getuserbyId,creatUser } from "../controllers/user.conroller.js";
export const resolvers={
    Query:{
       getUser:async(_, { id })=>{
        return await getuserbyId(id);
       }
    },
    Mutation:{
        createUser:async(_, {name,email})=>{
            return await creatUser(name, email);
        }
    }
}