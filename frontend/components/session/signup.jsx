import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
        this.changeForm = this.changeForm.bind(this);
    }

    changeForm() {
        this.props.removeErrors();
        this.props.openModal('login');
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/nav/tracks'))
                .then(this.props.closeModal);
    };

    // For Demo User
    handleDemoSubmit(e) {
        e.preventDefault()
        
        const demoUser = {
            username: "DemoUser22",
            email: "Demo@soundwave.com",
            password: "DemoUserPass"
        }
        
        this.props.createNewUser(demoUser)
            .then(() => this.props.history.push('/nav/tracks')),
                    this.props.login(demoUser)
                        .then(() => this.props.history.push('/nav/tracks'))
                            .then(this.props.closeModal)
                                .then(setTimeout(this.props.removeErrors, 1000)); //switch this with closeModal?
    }

    renderErrors() {
        if (this.props.errors) {
            return Object.values(this.props.errors)
                .map((error, idx) => (<li key={idx}>*{error}</li>)
            )
        }
    }


    render() {
        return (
            <div className="session-container">
                <h2 className="session-form-type">Sign Up</h2>
                <form className="session-form">
                    <label className="session-label">
                        <input 
                            type="text"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label className="session-label">
                        <input 
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label className="session-label">
                        <input 
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <ul className="session-form-errors">
                        {this.renderErrors()}
                    </ul>
                    <button className="session-form-btn" onClick={this.handleSubmit}>Sign Up</button>
                    <button className="session-form-btn" onClick={this.handleDemoSubmit}>Demo</button>
                </form>
                <p className="switch-form">Or <button onClick={this.changeForm}>Login</button></p>
            </div>
            )
        }
    }
    
export default withRouter(Signup);