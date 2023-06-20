import React from 'react';
import './userlist.css'

const UserList = ({ users, editUser, deleteUser }) => {
  return (
    <div className='user-card'>
       <h2>Show Users Here</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <button onClick={() => editUser(user.id)}>Edit</button>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};


export default UserList;
