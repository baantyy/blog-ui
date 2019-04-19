import React from 'react'

const CommentItem = (props) => {
    const { id, email, name, body } = props
    const imgUrl = `http://banty.in/dct/img/blog/${(id % 10) + 11}.jpg`
    return (
        <div className="commentBlock">
            <div className="img">
                <img src={ imgUrl } alt={ email }/>
            </div>
            <div className="commentBody">
                <h5>{ name }</h5>
                <h6>{ email }</h6>
                <p>{ body }</p>
            </div>
        </div>
    )
}   

export default CommentItem