import { getuserbyId, creatUser } from "../controllers/user.conroller.js";

// The keys here must match schema function names exactly
export const resolvers = {
  getUser: async ({ id }) => {
    return await getuserbyId(id);
  },
  createUser: async ({ name, email }) => {
    return await creatUser(name, email);
  }
};
