import React from 'react'

const CommentForm = (props) => {

    return (
        <div className="commentForm">
            <form>
                <input placeholder="Name" />
                <input placeholder="Email" />
                <textarea placeholder="Comment"></textarea>
                <button>Submit</button>
            </form>
        </div>
    )

}

export default CommentForm