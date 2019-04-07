import React from 'react'
import axios from 'axios'

import PostItem from './PostItem'
import Spinner from '../commons/Spinner'

class Posts extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            posts: [],
            isLoaded: false,
            postLimit: 6,
            postLimitLoaded: true,
            filteredPosts: [],
            searchValue: ""
        }
    }

    loadMoreHandle = () => {
        // this.setState((prevState) => ({
        //     postLimit: prevState.postLimit + 6
        // }))
        this.setState((prevState) => ({
            postLimitLoaded: prevState.postLimitLoaded = false
        }))
        setTimeout(() => {
            this.setState((prevState) => ({
                postLimit: prevState.postLimit + 6,
                postLimitLoaded: prevState.postLimitLoaded = true
            }))
        },300)
    }

    handleSearch = (e) => {
        const value = e.target.value
        this.setState((prevState) => ({
            searchValue: value,
            filteredPosts: prevState.posts.filter((post) => 
                post.title.toLowerCase().includes(value.toLowerCase())
            )
        }))
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState(() => ({ 
                    posts: response.data, 
                    isLoaded: true,
                    filteredPosts: response.data
                }))
            })
    }

    render(){

        return (
            <div>
                <div className="postHeader">
                    <img src="http://banty.in/wp/wp-content/uploads/2019/04/8.jpg" alt="Blog Post"/>
                    <span></span>
                    <div className="pageTitle">
                        <div className="container">
                            <h1>Posts</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                        { 
                            this.state.isLoaded ? (
                                <div>
                                    <div className="row">
                                        {
                                            this.state.filteredPosts.slice(0,this.state.postLimit).map((post) => {
                                                return <PostItem classValue="col-md-6" key={ post.id } id={ post.id } title={ post.title } body={ post.body } bodyLimit="200" />
                                            })
                                        }
                                    </div>
                                    <div className="loadMoreBtn">
                                        {
                                            this.state.postLimitLoaded ? ( 
                                                <button className="btn" onClick={() => this.loadMoreHandle() }>
                                                Load More</button>
                                            ) : ( <Spinner /> ) 
                                        }
                                    </div>
                                </div>
                            ) : ( <div className="text-center mt-5 mb-5"> <Spinner /> </div> )
                        }                        
                        </div>

                        <div className="col-md-4">
                            <div className="sideBar">
                                <div className="sideSearch">
                                    <form>
                                        <input type="text" className="form-control" placeholder="Search Here" value={this.state.searchValue} onChange={ this.handleSearch } />
                                    </form>
                                </div>

                                <div className="sideLatest">
                                    <h3>Recent Posts</h3>
                                    <div className="row">
                                        { 
                                            this.state.posts.slice(-3).map((post) => {
                                                return <PostItem classValue="col-12" key={ post.id } id={ post.id } title={ post.title } body={ post.body } bodyLimit="70" />
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posts