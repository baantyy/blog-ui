import React from 'react'
import axios from 'axios'
import { Title } from '../header/Title'

import UserItem from './UserItem'
import Spinner from '../commons/Spinner'

class Users extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            users: [],
            isLoaded: false,
            filteredUsers: [],
            searchValue: ""
        }
    }

    handleSearch = (e) => {
        const value = e.target.value
        this.setState((prevState) => ({
            searchValue: value,
            filteredUsers: prevState.users.filter((user) => 
                user.name.toLowerCase().includes(value.toLowerCase())
            )
        }))
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState(() => ({ 
                    users: res.data, 
                    isLoaded: true,
                    filteredUsers: res.data
                }))
            })
    }

    render(){

        return (
            <div>
                <Title title="Users" />                
                <div className="container">
                    <div className="userSearch">
                        <form>
                            <input type="text" className="form-control" placeholder="Search Here" value={this.state.searchValue} onChange={ this.handleSearch } />
                        </form>
                    </div>
                    <div className="allUsers">
                        { 
                            this.state.isLoaded ? (
                                <div className="row">
                                    {
                                        this.state.filteredUsers.map((user) => {
                                            return <UserItem 
                                                        key={ user.id } 
                                                        details={ user } 
                                                    />
                                        })
                                    }
                                </div>
                            ) : ( <div className="text-center mt-5 mb-5"><Spinner /></div> )
                        }       

                    </div>
                </div>
            </div>
        )
    }
}

export default Users