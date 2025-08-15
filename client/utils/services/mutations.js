export const deletemutation = `
mutation deleteUser($id: ID!) {
deleteUser(id: $id) {
name
message
Success
}
}
`;

 export const Addusermutation =`
    mutation CreateUser($name: String!, $email: String!) {
     createUser(name: $name, email: $email) {
     id
     name
     email
     Success
     }
    }
    `;

export  const updatemutation =`
    mutation updateUser($id:ID!,$name:String,$email:String){
      updateUser(id:$id,name:$name,email:$email){
    
       name
       message
       Success
  
      }
    }`;