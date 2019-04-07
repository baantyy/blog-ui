import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Posts from './components/posts/Posts'
import PostShow from './components/posts/PostShow'
import Footer from './components/footer/Footer'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <div className="wrapper">

          <Navbar />
          <div className="body">

              <Route path="/" component={Home} exact={true} />
              <Route path="/about" component={About} />
              <Route path="/posts" component={Posts} exact={true} />
              <Route path="/posts/:id" component={PostShow} />
              <Route path="/contact" component={Contact} />

              <footer>
                <Footer />
              </footer>

          </div>

        </div>
      </BrowserRouter>

    )
  }
}

export default App
