import React, { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from './services/userService';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const loadUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleCreateOrUpdate = async (user) => {
    const { id, user_id, ...userData } = user;
  
    if (id || user_id) {
      await updateUser(id || user_id, userData);
    } else {
      await createUser(userData);
    }
    loadUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    loadUsers();
  };

  const clearSelection = () => setSelectedUser(null);

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div className="container mt-5">
      <h2>Tecnobot Users</h2>
      <UserForm onSubmit={handleCreateOrUpdate} selectedUser={selectedUser} clearSelection={clearSelection} />
      <UserTable users={users} onEdit={setSelectedUser} onDelete={handleDelete} />
    </div>
  );
}

export default App;
