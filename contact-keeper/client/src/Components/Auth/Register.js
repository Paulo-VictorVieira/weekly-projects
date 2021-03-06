import React from 'react';
import { useNavigate } from 'react-router-dom';
import AlertContext from '../../Context/Alert/AlertContext';
import AuthContext from '../../Context/Auth/AuthContext';

const Register = () => {
  const authContext = React.useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const alertContext = React.useContext(AlertContext);
  const { setAlert } = alertContext;

  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }

    if (error !== null) {
      setAlert(error, 'danger');
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, navigate]);

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = user;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || password === '') {
      setAlert('Please enter all fields !', 'danger');
    } else if (password !== password2) {
      setAlert('Passwords do not match !', 'danger');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container animeLeft">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="input"
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            className="input"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            className="input"
            value={password2}
            onChange={handleChange}
          />
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
