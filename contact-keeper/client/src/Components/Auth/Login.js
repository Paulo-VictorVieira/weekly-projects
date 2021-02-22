import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/Auth/AuthContext';
import AlertContext from '../../Context/Alert/AlertContext';

const Login = () => {
  const authContext = React.useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;

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
  }, [navigate, isAuthenticated, error]);

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setAlert('Please fill all fields !!', 'danger');
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container animeLeft">
      <h1>
        Accout <span className="text-primary">Login</span>
      </h1>
      <form onSubmit={handleSubmit}>
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
        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
