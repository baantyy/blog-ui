import React from 'react'
import { Link } from 'react-router-dom'

const PostItem = (props) => {
    const { id, title, body, classValue, bodyLimit } = props
    const newBody = body.length > bodyLimit ? body.substring(0, bodyLimit - 3) + "..." : body
    const imgUrl = `http://banty.in/wp/wp-content/uploads/2019/04/${(id % 10) + 1}.jpg`
    return (
        <div className={ classValue }>
            <div className="postItem" title={ title }>
                <div className="img">
                    <img src={`${imgUrl}`} alt={ title } />
                </div>
                <div className="content">
                    <h5>{ title }</h5>
                    <p>{ newBody } </p>
                    <Link to={ `/posts/${id}` } >Read More</Link>
                </div>
            </div>
        </div>
    )
}

export default PostItem
