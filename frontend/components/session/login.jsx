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
            <div className="session-form">
                <ul>
                    {this.renderErrors()}
                </ul>
                <h2>Log In</h2>
                <form>
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
                    <button onClick={this.handleSubmit}>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;