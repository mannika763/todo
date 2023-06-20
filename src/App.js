
import React, { useState } from 'react';
import AddUserForm from './AddForm';
import UserList from './userlist';
import EditUserForm from './EditUserForm';
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const editUser = (id) => {
    setEditing(true);
    setCurrentUser(users.find((user) => user.id === id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };



  return (
    <div>
      {/* <h1 style={{backgroundColor: 'darkblue'}}>User Management</h1> */}
      {editing ? (
        <div className='editform-main'>
         
          <EditUserForm currentUser={currentUser} updateUser={updateUser} />
        </div>
      ) : (
        <div className='adduser-container'>
          
          <AddUserForm addUser={addUser} />
        </div>
      )}
     
      <UserList users={users} editUser={editUser} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
