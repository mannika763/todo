import React, { useState, useEffect } from 'react';
import './EditUserForm.css'


const EditUserForm = ({ currentUser, updateUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setEmail(currentUser.email);
      setPhone(currentUser.phone);
    }
  }, [currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    // Update user
    updateUser(currentUser.id, { name, email, phone });
  };

  return (
    <form className='form-container' onSubmit={handleSubmit}>
       <h2>Edit User</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">Update User</button>
    </form>
  );
};

export default EditUserForm;
