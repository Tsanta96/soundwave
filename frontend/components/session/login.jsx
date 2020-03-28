import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const changeForm = () => {
        props.removeErrors();
        props.openModal('signup');
    }

    const handleInput = (field) => {
        return e => {
            if (field === 'username') setUsername(e.currentTarget.value);
            if (field === 'password') setPassword(e.currentTarget.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            username: username,
            password: password
        }
        props.login(user)
            .then(() => props.history.push('/nav/tracks')) // ROUTE TO TRACK INDEX
            .then(props.closeModal);
    };

    const renderErrors = () => {
        if (props.errors) {
            return Object.values(props.errors)
                .map((error, idx) => <li key={idx}>*{error}</li>)
        }
    }

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
                <ul className="session-form-errors">
                    {renderErrors()}
                </ul>
                <button className="session-form-btn" id="login-btn" onClick={handleSubmit}>Log In</button>
            </form>
            <p className="switch-form">Or <button onClick={changeForm}>Sign up</button></p>
        </div>
    );
}

export default withRouter(Login);

// class Login extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.changeForm = this.changeForm.bind(this);
//     }

//     changeForm() {
//         this.props.removeErrors();
//         this.props.openModal('signup');
//     }

//     handleInput(field) {
//         return e => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.login(this.state)
//             .then(() => this.props.history.push('/nav/tracks')) // ROUTE TO TRACK INDEX
//                 .then(this.props.closeModal);
//     };

//     renderErrors() {
//         if (this.props.errors) {
//             return Object.values(this.props.errors)
//                 .map((error, idx) => <li key={idx}>*{error}</li>)
//         }
//     }

//     render() {
//         return (
//             <div className="session-container">
//                 <h2 className="session-form-type">Log In</h2>
//                 <form className="session-form">
//                     <label className="session-label">
//                         <input
//                             type="text"
//                             placeholder="Username"
//                             value={this.state.username}
//                             onChange={this.handleInput('username')}
//                         />
//                     </label>
//                     <label className="session-label">
//                         <input
//                             type="password"
//                             placeholder="Password"
//                             value={this.state.password}
//                             onChange={this.handleInput('password')}
//                         />
//                     </label>
//                     <ul className="session-form-errors">
//                         {this.renderErrors()}
//                     </ul>
//                     <button className="session-form-btn" id="login-btn" onClick={this.handleSubmit}>Log In</button>
//                 </form>
//                 <p className="switch-form">Or <button onClick={this.changeForm}>Sign up</button></p>
//             </div>
//         );
//     }
// }