import React from 'react' 
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Title } from '../header/Title'

import CommentItem from '../comments/CommentItem' 
import CommentForm from '../comments/CommentForm' 
import Spinner from '../commons/Spinner'
import { images } from '../images'

class PostShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            post: {},
            user: {},
            isLoaded: false, 
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState(() => ({ 
                    post: res.data
                }))
                axios.get(`https://jsonplaceholder.typicode.com/users/${res.data.userId}`)
                    .then(res => {
                        this.setState(() => ({ 
                            isLoaded: true,
                            user: res.data
                        }))
                    })
            })
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(res => {
                this.setState(() => ({ 
                    comments: res.data
                }))
            })        
    }
    render() {
        const id = this.props.match.params.id
        const { title, body } = this.state.post
        const postImg = images[id % 10].image
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <Title title={ title } />
                        <div className="postHeader">
                            <img src={`${postImg}`} alt={title} />
                            <span></span>
                            <div className="pageTitle">
                                <div className="container">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container">

                            <div className="postPage">
                                <h2>Posted By <Link to={ `../users/${this.state.user.id}` }>{ this.state.user.name }</Link></h2>
                                <div className="content">
                                    { body }
                                </div>
                            </div>

                            <div className="postComment">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3>All Comments</h3>
                                        { this.state.comments.map(comment => {
                                            return <CommentItem 
                                                        key={ comment.id } 
                                                        id={ comment.id } 
                                                        name={comment.name} 
                                                        email={comment.email} 
                                                        body={comment.body} 
                                                    />
                                        })}
                                    </div>
                                    <div className="col-md-5">
                                        <h3>Post a Comment</h3>
                                        <CommentForm />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> 
                ) : <div className="text-center mt-5 mb-5"><Spinner /></div> }
            </div>
        )
    }
}

export default PostShow
