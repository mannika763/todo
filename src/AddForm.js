import React, { useState } from 'react';
import './AddForm.css'

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!name || !email || !phone) {
      alert('Please fill in all fields.');
      return;
    }

    // Add user
    addUser({ name, email, phone });

    // Clear form inputs
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <>
    <div className='form-containers'>
    <form className='form-container' onSubmit={handleSubmit}>
      <h2>Add User</h2>
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
     
      <button type="submit">Add User</button>
    </form>
    </div>
    </>
  );
};

export default AddUserForm;
