import React from 'react';
import list from '../../Assets/list.svg';

const About = () => {
  return (
    <div className="grid-2 h-1 all-center-grid animeLeft">
      <img src={list} alt="List" />
      <div>
        {' '}
        <h1>About this App</h1>
        <p className="my-1">
          This is a full stack ReactApp for keeping contacts.
        </p>
      </div>
      <p className="bg-dark p text-center" style={{ gridColumn: '1 / span 2' }}>
        <strong>Version 2.0</strong>
      </p>
    </div>
  );
};

export default About;
