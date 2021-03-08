import React from 'react';
import PropTypes from 'prop-types';

const UseFormikNameItem = ({ name }) => {
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

UseFormikNameItem.propTypes = {
  name: PropTypes.object.isRequired,
};

export default UseFormikNameItem;
