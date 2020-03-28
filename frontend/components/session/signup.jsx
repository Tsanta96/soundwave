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

// class Signup extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             username: '',
//             email: '',
//             password: ''
//         };
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
//         this.changeForm = this.changeForm.bind(this);
//     }

//     changeForm() {
//         this.props.removeErrors();
//         this.props.openModal('login');
//     }

//     handleInput(field) {
//         return e => {
//             this.setState({ [field]: e.currentTarget.value })
//         }
//     }

//     handleSubmit(e) {
//         e.preventDefault()
//         this.props.createNewUser(this.state)
//             .then(() => this.props.history.push('/nav/tracks'))
//                 .then(this.props.closeModal);
//     };

//     // For Demo User
//     handleDemoSubmit(e) {
//         e.preventDefault()
        
//         // const demoUser = {
//         //     username: "DemoUser22",
//         //     email: "Demo@soundwave.com",
//         //     password: "DemoUserPass"
//         // }

//         const demoUser = {
//             username: "teo",
//             password: "password"
//         }

//         this.props.login(demoUser)
//             .then(() => this.props.history.push('/nav/tracks'))
//             .then(this.props.closeModal)
//             .then(setTimeout(this.props.removeErrors, 1000)); 
//     }

//     renderErrors() {
//         if (this.props.errors) {
//             return Object.values(this.props.errors)
//                 .map((error, idx) => (<li key={idx}>*{error}</li>)
//             )
//         }
//     }


//     render() {
//         return (
//             <div className="session-container">
//                 <h2 className="session-form-type">Sign Up</h2>
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
//                             type="text"
//                             placeholder="Email"
//                             value={this.state.email}
//                             onChange={this.handleInput('email')}
//                         />
//                     </label>
//                     <label className="session-label">
//                         <input 
//                             type="password"
//                             placeholder="password"
//                             value={this.state.password}
//                             onChange={this.handleInput('password')}
//                         />
//                     </label>
//                     <ul className="session-form-errors">
//                         {this.renderErrors()}
//                     </ul>
//                     <button className="session-form-btn" onClick={this.handleSubmit}>Sign Up</button>
//                     <button className="session-form-btn" onClick={this.handleDemoSubmit}>Demo</button>
//                 </form>
//                 <p className="switch-form">Or <button onClick={this.changeForm}>Login</button></p>
//             </div>
//             )
//         }
//     }
    
