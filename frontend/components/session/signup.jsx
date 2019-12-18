import React from 'react';

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
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.createNewUser(this.state)
            .then(() => this.props.history.push('/tracks')); // ROUTE TO TRACK INDEX
    };

    // For Demo User
    handleDemoSubmit(e) {
        e.preventDefault()
        
        const demoUser = {
            username: "DemoUser22",
            email: "Demo@soundwave.com",
            password: "DemoUserPass"
        }
        
        this.props.login(demoUser)
            .then(() => this.props.history.push('/tracks'));
    }

    renderErrors() {
        if (this.props.errors) {
            return Object.values(this.props.errors)
                .map((error, idx) => (<li key={idx}>{error}</li>)
            )
        }
    }


    render() {
        return (
            <div className="session-container">
                <h2 className="form-type">Sign Up</h2>
                <form className="session-form">
                    <label>Username:
                        <input 
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Email:
                        <input className="email"
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input className="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button className="form-btn" onClick={this.handleSubmit}>Sign Up</button>
                    <button className="form-btn" onClick={this.handleDemoSubmit}>Demo</button>
                </form>
                <ul className="form-errors">
                    {this.renderErrors()}
                </ul>
            </div>
            )
        }
    }
    
export default Signup;