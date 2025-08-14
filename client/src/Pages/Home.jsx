import React from 'react';
import { useActionState } from 'react';
import { apiurl } from '../../utils/services/ApiUrl';

const Home = () => {
  const handleclick = async (prevState, formData) => {
    const name = formData.get('name');
    const email = formData.get('email');

    const mutation =`
    mutation CreateUser($name: String!, $email: String!) {
     createUser(name: $name, email: $email) {
     id
     name
     email
     Success
     }
    }
    `;
    try{
        let send = await apiurl.post('',{
          query: mutation,
          variables: { name, email }
        })
        const{data} = send;
        console.log(send);

    }catch(err){
      console.log(err);
    }

    // let senddata = await apiurl.post()
    // // Example: Simulate API request
    // await new Promise((res) => setTimeout(res, 500));

    // Return the next state
    return { message: `User ${name} added successfully!` };
  };

  const [state, formAction] = useActionState(handleclick, { message: '' });

  return (
    <>
      <div className="main-section">
        <h1>Welcome to GraphQL CRUD Operation</h1>
        <p>This is a simple application demonstrating CRUD operations using GraphQL</p>
      </div>

      <div className="form-section">
        <form action={formAction}>
          <div className="myform">
            <label htmlFor="name">Enter User Name</label>
            <input
              className="custom_input"
              name="name"
              id="name"
              type="text"
              placeholder="Enter the user name"
              required
            />
          </div>

          <div className="myform">
            <label htmlFor="email">Enter User Email</label>
            <input
              name="email"
              id="email"
              className="custom_input"
              type="email"
              placeholder="Enter the user email"
              required
            />
          </div>

          <button type="submit">Save User Info</button>
        </form>

        {/* Show message after submit */}
        {state.message && <p style={{ color: 'green' }}>{state.message}</p>}
      </div>
    </>
  );
};

export default Home;
