import React, { useState, useEffect } from 'react';
import CommentItem from './comment_item';

//Function component using hooks

const Comments = (props) => {
    const [body, setBody] = useState('');
    const [author_id, setAuthor_id] = useState(props.currentUser.id);
    const [track_id, setTrack_id] = useState(props.trackId);

    useEffect(() => {
        props.fetchComments(props.trackId);
        props.fetchTrack(props.trackId);
        // console.log("hello")
    }, [])

    const handleInput = () => {
        return e => {
            setBody(e.currentTarget.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const comment = {
            body: body,
            author_id: author_id,
            track_id: track_id
        }

        props.createComment(comment);

        setBody('');
    }

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
                        value={body}
                        onChange={handleInput('body')}
                    />
                </label>
                <button className="comment-button" onClick={handleSubmit}>Comment</button>
            </form>
            <div>
                <ul className="comments-box">
                    {props.comments.map((comment, idx) => <CommentItem key={comment.id} idx={idx} comment={comment} />)}
                </ul>
            </div>
        </div>
    )
}

export default Comments;