import React from 'react';
import { useParams } from 'react-router-dom';

const User = ({ getUser, user, loading }) => {
  const { login } = useParams();

  React.useEffect(() => {
    getUser(login);
  }, [login]);

  return (
    <div>
      <p>{user && user.name}</p>
      <p>{user && user.avatar_url}</p>
      <p>{user && user.location}</p>
      <p>{user && user.bio}</p>
      <p>{user && user.blog}</p>
      <p>{user && user.login}</p>
      <p>{user && user.html_url}</p>
      <p>{user && user.followers}</p>
      <p>{user && user.following}</p>
      <p>{user && user.public_repos}</p>
      <p>{user && user.public_gists}</p>
      <p>{user && user.hireble}</p>
    </div>
  );
};

export default User;
