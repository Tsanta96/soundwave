import React from 'react';
import CommentItem from './comment_item';

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: "",
            author_id: this.props.currentUser.id,
            track_id: this.props.trackId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComments(this.props.trackId);
        this.props.fetchTrack(this.props.trackId);
    }

    handleInput() {
        return e => {
            this.setState({ body: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment(this.state);

        this.setState({ body: "" });
    }

    render() {
        return (
            <div>
                <div className="comment-title">
                    <h1>Comments</h1>
                </div>
                <form className="comments-form">
                    <label className="comment-body">
                        <textarea rows="4" cols="80"
                            type="textArea"
                            placeholder="Say something about this track"
                            value={this.state.body}
                            onChange={this.handleInput('body')}
                        />
                    </label>
                    <button className="comment-button" onClick={this.handleSubmit}>Comment</button>
                </form>
                <div>
                    <ul className="comments-box">
                        {this.props.comments.map((comment, idx) => <CommentItem key={comment.id} idx={idx} comment={comment} />)}
                    </ul>
                </div>
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