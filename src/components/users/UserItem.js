import React from 'react'
import { Link } from 'react-router-dom'
import { images } from '../images'

const FontAwesome = require('react-fontawesome')

const UserItem = (props) => {

    const { id, name, email, address, phone } = props.details
    const profilePic = images[id % 10].image

    return (
        <div className="col-md-6">
            <div className="userItem">
                <div className="img" title={ name }>
                    <img src={`${profilePic}`} alt={ name } />
                </div>
                <div className="content">
                    <h3>{ name }</h3>
                    <h4><FontAwesome name='envelope-open' /> { email.toLowerCase() }</h4>
                    <h5><FontAwesome name='phone' /> { phone }</h5>
                    <p><FontAwesome name='map-marker' /> { `${address.street}, ${address.city}` }</p>
                    <Link className="more" to={ `/users/${id}` } >View Profile</Link>
                </div>
            </div>
        </div>
    )
}

export default UserItem
