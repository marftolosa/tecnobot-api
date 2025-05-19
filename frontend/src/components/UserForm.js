import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, selectedUser, clearSelection }) => {
    const [formData, setFormData] = useState({ user_id: null, name: '', last_name: '', email: '', password: '' });

    useEffect(() => {
        if (selectedUser) {
          setFormData({
            user_id: selectedUser.user_id || null,
            name: selectedUser.name || '',
            last_name: selectedUser.last_name || '',
            email: selectedUser.email || '',
            password: ''
          });
        } else {
          setFormData({ user_id: null, name: '', last_name: '', email: '', password: '' });
        }
    }, [selectedUser]);      

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userToSubmit = { ...formData };
  if (selectedUser && !formData.password) {
    delete userToSubmit.password;
  }
  if (!selectedUser && !formData.password) {
    alert("Password is required");
    return;
  }
    onSubmit(userToSubmit);
    setFormData({ name: '', last_name: '', email: '', password: '' });
    clearSelection();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>{selectedUser ? 'Edit User' : 'Add User'}</h4>
      <div className="mb-2">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form-control"
          value={formData.name} 
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          className="form-control"
          value={formData.last_name} 
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-2">
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="form-control"
          value={formData.password}
          onChange={handleChange}
          required={!selectedUser}
        />
      </div>
      <button type="submit" className="btn btn-primary me-2">
        {selectedUser ? 'Update' : 'Create'}
      </button>
      {selectedUser && (
        <button type="button" className="btn btn-secondary" onClick={clearSelection}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default UserForm;
