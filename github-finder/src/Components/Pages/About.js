import React from 'react';
import account from '../../Assets/account.svg';

const About = () => {
  return (
    <div className="all-center animeLeft h-1">
      <div className="grid-2 m-1">
        <div>
          <img src={account} alt="Account" />
        </div>
        <div>
          <h1 className="x-large text-center">About This App</h1>
          <p className="text-center lead">App to search Github user</p>
          <p className="text-center lead">Some reservation right</p>
          <p className="text-center lead">Paulo Victor Vieira Cunha</p>
        </div>
      </div>
    </div>
  );
};

export default About;
