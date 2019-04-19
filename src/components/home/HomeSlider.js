import React from 'react'
import { Link } from 'react-router-dom'

const FontAwesome = require('react-fontawesome')

const HomeSlider = (props) => {

    return (
        <div className="homeSlider">
            <div id="homeCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="http://banty.in/dct/img/blog/7.jpg" alt="1" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://banty.in/dct/img/blog/1.jpg" alt="2" />
                    </div>
                    <div className="carousel-item">
                        <img src="http://banty.in/dct/img/blog/5.jpg" alt="3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#homeCarousel" role="button" data-slide="prev">
                    <FontAwesome name="chevron-circle-left" />
                </a>
                <a className="carousel-control-next" href="#homeCarousel" role="button" data-slide="next">
                    <FontAwesome name="chevron-circle-right" />
                </a>
            </div>
            <div className="homeContent">
                <div className="container">
                    <h2>Welcome to My Blog Page</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    <Link className="button" to="posts" >Know More</Link>
                </div>
            </div>
        </div>
    )
}

export default HomeSlider