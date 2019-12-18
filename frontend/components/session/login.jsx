import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.login(this.state)
            .then(() => this.props.history.push('/tracks')); // ROUTE TO TRACK INDEX
    };

    renderErrors() {
        if (this.props.errors) {
            return Object.values(this.props.errors)
                .map((error, idx) => <li key={idx}>{error}</li>)
        }
    }

    render() {
        return (
            <div className="session-container">
                <h2 className="form-type">Log In</h2>
                <form className="session-form">
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button className="form-btn" id="login-btn" onClick={this.handleSubmit}>Log In</button>
                </form>
                <ul className="form-errors">
                    {this.renderErrors()}
                </ul>
            </div>
        );
    }
}

export default Login;