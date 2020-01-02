import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            track_id: this.props.trackId
        }
    }

    handleInput() {
        return e => {
            this.setState({ [body]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state)
    }

    render() {
        return (
            <div>
                <form>
                    <label className="comment-body">
                        <input 
                            type="textArea"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Comment</button>
                </form>
            </div>
        )
    }
}

export default Comments;

{/* <div>
    <h1>hello</h1>
    <h1>{this.props.currentUser.username}</h1>
    <h1>{this.props.trackId}</h1>
    <button></button>
</div> */}