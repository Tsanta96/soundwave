import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Signup = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const changeForm = () => {
        props.removeErrors();
        props.openModal('login');
    }

    const handleInput = (field) => {
        return e => {
            if (field === 'username') setUsername(e.currentTarget.value);
            if (field === 'email') setEmail(e.currentTarget.value);
            if (field === 'password') setPassword(e.currentTarget.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: username,
            email: email,
            password: password
        }

        props.createNewUser(user)
            .then(() => props.history.push('/nav/tracks'))
            .then(props.closeModal);
    };

    // For Demo User
    const handleDemoSubmit = (e) => {
        e.preventDefault()

        const demoUser = {
            username: "teo",
            password: "password"
        }

        props.login(demoUser)
            .then(() => props.history.push('/nav/tracks'))
            .then(props.closeModal)
            .then(setTimeout(props.removeErrors, 1000));
    }

    const renderErrors = () => {
        if (props.errors) {
            return Object.values(props.errors)
                .map((error, idx) => (<li key={idx}>*{error}</li>))
        }
    }

    return (
        <div className="session-container">
            <h2 className="session-form-type">Sign Up</h2>
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
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleInput('email')}
                    />
                </label>
                <label className="session-label">
                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={handleInput('password')}
                    />
                </label>
                <ul className="session-form-errors">
                    {renderErrors()}
                </ul>
                <button className="session-form-btn" onClick={handleSubmit}>Sign Up</button>
                <button className="session-form-btn" onClick={handleDemoSubmit}>Demo</button>
            </form>
            <p className="switch-form">Or <button onClick={changeForm}>Login</button></p>
        </div>
    )
}

export default withRouter(Signup);