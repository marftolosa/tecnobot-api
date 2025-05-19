import React from 'react';

const UserTable = ({ users, onEdit, onDelete }) => (
  <table className="table table-striped mt-4">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.user_id}>
          <td>{user.user_id}</td>
          <td>{user.name}</td>
          <td>{user.last_name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(user)}>Edit</button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.user_id)}>Delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
