import { useState } from 'react';
import styles from './loginPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operation';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const [state, setState] = useState({ email: '', password: '' });
  const { email, password } = state;
  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setState({ email, password });
    dispatch(signup({ ...state }));
  };

  if (isLogin) {
    return <Navigate to="contacts" />;
  }
  return (
    <>
      <h2>Login Page</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
