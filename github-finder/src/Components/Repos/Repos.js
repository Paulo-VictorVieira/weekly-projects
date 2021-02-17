import React from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return (
    <div className="grid-3 text-center">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
