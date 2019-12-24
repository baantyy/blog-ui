import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../images'

const PostItem = (props) => {

    const { id, title, body, classValue, bodyLimit, user } = props
    const newBody = body.length > bodyLimit ? body.substring(0, bodyLimit - 3) + "..." : body
    const postImg = images[id % 10].image

    return (
        <div className={ classValue }>
            <div className="postItem">
                <div className="img" title={ title }>
                    <img src={`${postImg}`} alt={ title } />
                </div>
                <div className="content">
                    <h5>{ title }</h5>
                    {
                        user ? (<div className="postAuthor">Posted by <Link to={`../users/${user.id}`}>{ user.name }</Link></div>) : ""
                    }
                    <p>{ newBody } </p>
                    <Link className="button more" to={ `/posts/${id}` } >Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default PostItem
