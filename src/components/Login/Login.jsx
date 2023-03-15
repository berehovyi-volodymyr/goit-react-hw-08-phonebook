import { useState } from 'react';
import styles from './login.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operation';
import { isUserLogin } from '../../redux/auth/auth-selectors';

const Login = () => {
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
    dispatch(login({ ...state }));
  };

  if (isLogin) {
    return <Navigate to="contacts" />;
  }
  return (
    <>
      <div className={styles.conteiner}>
        <h2>Login Page</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <span className={styles.title}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
              className={styles.input}
            />
          </label>
          <label>
            <span className={styles.title}>Password</span>
            <input
              type="password"
              name="password"
              value={password}
              required
              onChange={handleChange}
              className={styles.input2}
            />
          </label>

          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
