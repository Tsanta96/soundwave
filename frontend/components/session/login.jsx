import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const changeForm = () => {
    props.removeErrors();
    props.openModal('signup');
  };

  const handleInput = (field) => {
    return (e) => {
      if (field === 'username') setUsername(e.currentTarget.value);
      if (field === 'password') setPassword(e.currentTarget.value);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      password: password,
    };
    props
      .login(user)
      .then(() => props.history.push('/nav/tracks')) // ROUTE TO TRACK INDEX
      .then(props.closeModal);
  };

  const handleDemoSubmit = async (e) => {
    e.preventDefault();

    const demoUser = {
      username: 'demouser',
      password: 'password',
    };

    try {
      await props.login(demoUser);
      props.history.push('/nav/tracks');
      props.closeModal();

      setTimeout(() => {
        props.removeErrors();
      }, 1000);
    } catch (data) {
      console.log('data => ', data);
    }
  };

  const renderErrors = () => {
    if (props.errors) {
      return Object.values(props.errors).map((error, idx) => (
        <li key={idx}>*{error}</li>
      ));
    }
  };

  return (
    <div className="session-container">
      <h2 className="session-form-type">Log In</h2>
      <form className="session-form">
        <label className="session-label">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleInput('username')}
          />
        </label>
        <label className="session-label">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInput('password')}
          />
        </label>
        <ul className="session-form-errors">{renderErrors()}</ul>
        <button
          className="session-form-btn"
          id="login-btn"
          onClick={handleSubmit}
        >
          Log In
        </button>
        <button className="session-form-btn" onClick={handleDemoSubmit}>
          Demo
        </button>
      </form>
      <p className="switch-form">
        Or <button onClick={changeForm}>Sign up</button>
      </p>
    </div>
  );
};

export default withRouter(Login);
