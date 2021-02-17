import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import Repos from '../Repos/Repos';

const User = ({ user, getUser, repos, getUserRepos, loading }) => {
  const { login } = useParams();

  React.useEffect(() => {
    getUser(login);
    getUserRepos(login);

    // eslint-disable-next-line
  }, [login]);

  if (loading) return <Spinner />;
  if (user) {
    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>{' '}
          <p>
            Hirable:{' '}
            {user.hireble ? (
              <i className="fas fa-check text-sucess"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </p>
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={user.avatar_url}
              alt="Avatar"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{user.name}</h1>
            <p>Location: {user.location}</p>
          </div>
          <div className="all-center">
            {user.bio && (
              <>
                <h3>Bio</h3>
                <p>{user.bio}</p>
              </>
            )}
            <a href={user.html_url} className="btn btn-dark my-1">
              Visit Github Profile
            </a>
            <ul>
              <li>
                {login && (
                  <>
                    <strong>Username: </strong> {login}
                  </>
                )}
              </li>
              <li>
                {user.company && (
                  <>
                    <strong>Company: </strong> {user.company}
                  </>
                )}
              </li>
              <li>
                {user.blog && (
                  <>
                    <strong>Website: </strong> {user.blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {user.followers}</div>
          <div className="badge badge-success">Following: {user.following}</div>
          <div className="badge badge-light">
            Public Repos: {user.public_repos}
          </div>
          <div className="badge badge-dark">
            Public Gists: {user.public_gists}
          </div>
        </div>
        {repos && <Repos repos={repos} />}
      </div>
    );
  } else {
    return <div>Sem usuário</div>;
  }
};

export default User;
