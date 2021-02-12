import React from 'react';
import spinner from '../../Assets/spinner.gif';

const Spinner = () => {
  return (
    <div className="all-center h-1">
      <img
        src={spinner}
        alt="Loading..."
        style={{
          width: '200px',
          margin: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default Spinner;
