import React from 'react' 
import axios from 'axios'
import { Title } from '../header/Title'
import Slider from 'react-slick'

import PostItem from '../posts/PostItem'
import Spinner from '../commons/Spinner'

const FontAwesome = require('react-fontawesome')

class UserShow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            user: {},
            isLoaded: false, 
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id 
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                this.setState(() => ({
                    user: res.data, 
                    isLoaded: true 
                }))
            })
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(res => {
                this.setState(() => ({ 
                    posts: res.data 
                }))
            })
    }
    render() {
        const id = this.props.match.params.id
        const { name, username, email, address, phone, website, company } = this.state.user
        const bgImg = `http://banty.in/wp/wp-content/uploads/2019/04/${(id % 10) + 1}.jpg`
        const profilePic = `http://banty.in/wp/wp-content/uploads/2019/04/${(id % 10) + 11}.jpg`

        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        }
        
        return(
            <div>
                { this.state.isLoaded ? (
                    <div>
                        
                        <Title title={name} />

                        <div className="postHeader" style={{height: '300px'}}>
                            <img src={bgImg} alt="User Page"/>
                            <span></span>
                        </div>

                        <div className="userPage">
                            <div className="container">
                                <div className="img">
                                    <img src={`${profilePic}`} alt={name} />
                                </div>
                                <h1>{ name }</h1>
                                        
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="content">
                                            <h2>About</h2>
                                            <div>
                                                <p><FontAwesome name="user-circle" /> { username }</p>
                                                <p><FontAwesome name="envelope-open" /> { email.toLowerCase() }</p>
                                                <p><FontAwesome name="phone" /> { phone }</p>
                                                <p><FontAwesome name="globe" />  { website }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <h2>Address</h2>
                                            <div>
                                                <p>{ `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}` }</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="content">
                                            <h2>Company</h2>
                                            <div>
                                                <p>{ `${company.name}, ${company.catchPhrase}, ${company.bs}` }</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div> 

                        <div className="container">  

                            <h2 className="subTitle">Related Posts</h2>                         

                            <Slider {...settings}>
                                {
                                    this.state.posts.map((post) => {
                                        return <PostItem 
                                                    classValue="userPostItem" 
                                                    key={ post.id } 
                                                    id={ post.id } 
                                                    title={ post.title } 
                                                    body={ post.body } 
                                                    bodyLimit="200" 
                                                    user={ this.state.user }
                                                />
                                    })
                                }
                            </Slider>

                        </div>
                    </div> 
                ) : <div className="text-center mt-5 mb-5"><Spinner /></div> }
            </div>
        )
    }
}

export default UserShow
