import React, { useState, useEffect } from "react";
import { apiurl } from "../../utils/services/ApiUrl";

const Allusers = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({ id: "", name: "", email: "" });

  const getquery = `
    query Allusers {
      allUsers {
        id
        name
        email
      }
    }
  `;

  const fetchUsers = async () => {
    try {
      let send = await apiurl.post("", { query: getquery });
      const { data } = send?.data;
      const { allUsers } = data;
      setUsers(allUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Open modal for updating
  const handleUpdateClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  // Handle input change in modal
  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  // Save updated user (GraphQL mutation can be used here)
  const handleSave = async () => {
    const mutation =`
    mutation updateUser($id:ID!,$name:String,$email:String){
      updateUser(id:$id,name:$name,email:$email){
    
       name
       message
       Success
  
      }
    }`;
    const variables = {
      id: selectedUser.id,
      name: selectedUser.name,
      email: selectedUser.email,
    }

    let send = await apiurl.post('',{
      query: mutation,
      variables: variables
    })
    console.log("Response from update:", send);
    fetchUsers();
    // TODO: Call GraphQL mutation for update
    setIsModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "10px" }}>All Users</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "left",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={thStyle}>SR.</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id} style={{ borderBottom: "1px solid #ddd" }}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>
                <button
                  style={updateBtnStyle}
                  onClick={() => handleUpdateClick(user)}
                >
                  Update
                </button>
                <button style={deleteBtnStyle}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <h3>Update User</h3>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={selectedUser.name}
              onChange={handleChange}
              style={inputStyle}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={selectedUser.email}
              onChange={handleChange}
              style={inputStyle}
            />
            <div style={{ marginTop: "10px" }}>
              <button style={updateBtnStyle} onClick={handleSave}>
                Save
              </button>
              <button style={deleteBtnStyle} onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
const thStyle = { padding: "10px", borderBottom: "2px solid #ccc" };
const tdStyle = { padding: "10px" };
const updateBtnStyle = {
  backgroundColor: "#4CAF50",
  color: "white",
  padding: "5px 10px",
  marginRight: "5px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
const deleteBtnStyle = {
  backgroundColor: "#f44336",
  color: "white",
  padding: "5px 10px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
const modalContent = {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "8px",
  width: "300px",
  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
};
const inputStyle = {
  width: "100%",
  padding: "8px",
  margin: "5px 0 10px 0",
  border: "1px solid #ccc",
  borderRadius: "4px",
};

export default Allusers;
