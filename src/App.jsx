import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [myData, myUserData] = useState([]);
  const [editData, myEditData] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get('https://reqres.in/api/users?page=2')
      .then((res) => {
        myUserData(res.data.data);
      })
      .catch((error) => {
        console.log('error');
      });
  };

  const deleteUser = (id) => {
    console.log(`Delete user with id ${id}`);
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        myUserData((oldData) => oldData.filter((user) => user.id !== id));
      })
      .catch((error) => {
        console.log('error');
      });
  };

  const editUser = (id) => {
    console.log(`Edit user with id ${id}`);
    axios
      .get(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        myEditData(res.data.data);
      })
      .catch((error) => {
        console.log('error');
      });
  };

  const saveUser = () => {
    if (editData) {
      console.log(`Saving user with id ${editData.id}`);
      axios
        .patch(`https://reqres.in/api/users/${editData.id}`, editData)
        .then((response) => {
          myEditData(null);
          myUserData(myData.map((data) => (
            editData.id === data.id ? 
            response.data
            :
            data
          )))
         
          console.log('update is work');
        })
        .catch((error) => {
          console.log('error');
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

  const handleFormChange = (e) => {
    const { name, value } = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const createUser = () => {
    const newUser = {
      id: formData.id,
      email: formData.email,
      first_name: formData.first_name,
      last_name: formData.last_name,
      avatar: formData.avatar,
    };
    axios
      .post('https://reqres.in/api/users', newUser)
      .then(() => {
        myUserData((oldData) => [newUser, ...oldData]);
        setFormData({
          id: '',
          email: '',
          first_name: '',
          last_name: '',
          avatar: '',
        });
      })
      .catch((error) => {
        console.log('error');
      });
  };

  return (
    <>
      <h1>hello</h1>
      <div>
        <h2>Create User</h2>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={formData.id}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="avatar"
          placeholder="Avatar URL"
          value={formData.avatar}
          onChange={handleFormChange}
        />
        <button onClick={createUser}>Create User</button>
      </div>
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
