import React from 'react'

const CommentItem = (props) => {
    return (
        <div className="commentBlock">
            <div className="img">
                <img src="https://via.placeholder.com/75x75" alt={props.email}/>
            </div>
            <div className="commentBody">
                <h5>{ props.name }</h5>
                <h6>{ props.email }</h6>
                <p>{ props.body }</p>
            </div>
        </div>
    )
}   

export default CommentItem