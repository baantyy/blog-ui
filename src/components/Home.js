import React from 'react'
import { Title } from './header/Title'

import HomeSlider from './home/HomeSlider'
import HomeAbout from './home/HomeAbout'

const Home = (props) => {

    return (
        <div className="home">
            <Title title="Blog" />
            <HomeSlider />
            <HomeAbout />           
        </div>
    )
}

export default Home