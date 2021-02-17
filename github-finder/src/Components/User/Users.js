import React from 'react';
import Spinner from '../Layout/Spinner';
import UserItem from './UserItem';
import GithubContext from '../../Context/GithubContext/GithubContext';

const User = () => {
  const githubContext = React.useContext(GithubContext);
  const { users, loading } = githubContext;

  if (loading) return <Spinner />;
  return (
    <div className="grid-3">
      {users && users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

export default User;
