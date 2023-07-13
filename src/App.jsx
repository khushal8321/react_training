import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [myData, myUserData] = useState([])
  const [editData, myEditData] = useState(null)

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = () => {
    axios.get("https://reqres.in/api/users?page=2")
      .then((res) => {
        myUserData(res.data.data)
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const deleteUser = (id) => {
    console.log(`Delete user with id ${id}`);
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        myUserData((oldData) => oldData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const editUser = (id) => {
    console.log(`Edit user with id ${id}`);
    axios.get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        myUserData((oldData)=> oldData.filter((user)=> user.id === id))
        myEditData(res.data.data);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const saveUser = () => {
    if (editData) {
      console.log(`Saving user with id ${editData.id}`);
      axios.patch(`https://reqres.in/api/users/${editData.id}`, editData)
        .then(() => {
          myEditData(null);
          fetchData();
          console.log("update is work")
        })
        .catch((error) => {
          console.log("error");
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    myEditData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createUser = () => {
    const newUser = {
      id:Math.floor((Math.random()*100)),
      email: "abc@email.com",
      first_name: "abhi",
      last_name: "patel",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    };
    myUserData((oldData) => [newUser, ...oldData]);
  };

  return (
    <>
      <h1>hello</h1>
      <button onClick={createUser}>Create User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Avatar</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myData.map((udata) => {
            const { id, email, first_name, last_name, avatar } = udata;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{email}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
                <td>
                  <img src={avatar} alt="avatar" />
                </td>
                <td>
                  <button onClick={() => editUser(id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteUser(id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {editData && (
        <div>
          <h2>Edit User</h2>
          <input
            type="text"
            name="first_name"
            value={editData.first_name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="last_name"
            value={editData.last_name}
            onChange={handleChange}
          />
          <button onClick={saveUser}>Save</button>
        </div>
      )}
    </>
  );
}

export default App;
