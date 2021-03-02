import React from 'react';

const NameItem = ({ name }) => {
  const { firstName, lastName } = name;

  return (
    <div className="card bg-light">
      {' '}
      <ul className="list">
        {firstName && (
          <li>
            <strong>First Name: </strong>
            {firstName}
          </li>
        )}
        {lastName && (
          <li>
            <strong>Last Name: </strong> {lastName}
          </li>
        )}
      </ul>
    </div>
  );
};

export default NameItem;
