import React from 'react';
import AlertContext from '../../Context/Alert/AlertContext';

const Alert = () => {
  const alertContext = React.useContext(AlertContext);
  const { alert } = alertContext;

  return (
    alert !== null && (
      <div key={alert.type} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" /> {alert.msg}
      </div>
    )
  );
};

export default Alert;
