import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinner from '../Layout/Spinner';
import Repos from '../Repos/Repos';

import GithubContext from '../../Context/GithubContext/GithubContext';

const User = () => {
  const githubContext = React.useContext(GithubContext);
  const { getUser, user, getUserRepos, repos, loading } = githubContext;

  const { login } = useParams();

  React.useEffect(() => {
    getUser(login);
    getUserRepos(login);

    // eslint-disable-next-line
  }, [login]);

  if (loading) return <Spinner />;
  if (user && repos) {
    const {
      name,
      company,
      avatar_url,
      location,
      bio,
      blog,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = user;

    return (
      <div className="animeLeft">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/" className="btn btn-light">
            Back to Search
          </Link>{' '}
          <p>
            Hireable:{' '}
            {hireable ? (
              <i className="fas fa-check text-sucess"></i>
            ) : (
              <i className="fas fa-times-circle text-danger"></i>
            )}
          </p>
        </div>
        <div className="card grid-2">
          <div className="all-center">
            <img
              src={avatar_url}
              alt="Avatar"
              className="round-img"
              style={{ width: '150px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div className="all-center">
            {bio && (
              <>
                <h3>Bio</h3>
                <p>{bio}</p>
              </>
            )}
            <a href={html_url} className="btn btn-dark my-1">
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
                {company && (
                  <>
                    <strong>Company: </strong> {company}
                  </>
                )}
              </li>
              <li>
                {blog && (
                  <>
                    <strong>Website: </strong> {blog}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Public Repos: {public_repos}</div>
          <div className="badge badge-dark">Public Gists: {public_gists}</div>
        </div>
        <Repos repos={repos} />
      </div>
    );
  } else {
    return <h1 className="text-danger">No user</h1>;
  }
};

export default User;
