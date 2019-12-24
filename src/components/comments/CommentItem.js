import React from 'react'
import { images } from '../images'

const CommentItem = (props) => {
    const { id, email, name, body } = props
    const imgUrl = images[id % 10] ? `${images[id % 10].image}` : ''
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