import React from 'react';
import UserItem from './UserItem';

const User = ({ users, loading }) => {
  if (loading) return <p>Loading...</p>;
  return (
    <div className="grid-3">
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

export default User;
