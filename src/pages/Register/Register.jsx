import { useState } from 'react';
import styles from './register.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operation';
import { isUserLogin } from '../../redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

const Register = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = state;
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
    setState({ name, email, password });
    dispatch(signup({ ...state }));
  };

  if (isLogin) {
    return <Navigate to="contacts" />;
  }
  return (
    <>
      <div className={styles.conteiner}>
        <h2>Register</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            <span className={styles.title}>User name</span>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              required
              className={styles.input}
            />
          </label>
          <label>
            <span className={styles.title}>Email</span>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={handleChange}
              className={styles.input2}
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
              className={styles.input3}
            />
          </label>

          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
