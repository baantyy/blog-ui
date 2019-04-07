import React from 'react' 
import axios from 'axios'

import CommentItem from '../comments/CommentItem' 
import Spinner from '../commons/Spinner'

class PostShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            post: {},
            isLoaded: false, 
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                this.setState(() => ({
                    post: response.data, 
                    isLoaded: true 
                }))
            })

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => {
                this.setState(() => ({ 
                    comments: response.data 
                }))
            })
        
    }
    render() {
        const id = this.props.match.params.id
        const { title, body } = this.state.post
        const imgUrl = `http://banty.in/wp/wp-content/uploads/2019/04/${(id % 10) + 1}.jpg`
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        <div className="postHeader">
                            <img src={`${imgUrl}`} alt={title} />
                            <span></span>
                            <div className="pageTitle">
                                <div className="container">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="container">

                            <div className="postPage">
                                <div className="content">
                                    { body }
                                </div>
                            </div>

                            <div className="postComment">
                                <div className="row">
                                    <div className="col-md-7">
                                        <h3>All Comments</h3>
                                        <div>
                                            { this.state.comments.map(comment => {
                                                return <CommentItem key={ comment.id } name={comment.name} email={comment.email} body={comment.body} />
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <h3 className="text-right">Post a Comment</h3>
                                        <div>
                                            
                                        </div>
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
