import React from 'react';

const CommentItem = ({ comment }) => {

    return (
        <div className="comment-content">
            <h1>{comment.body}</h1>
            <h2>{comment.userName}</h2>
        </div>
    )
}

export default CommentItem;