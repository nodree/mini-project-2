import React, { Component } from 'react';
import { connect } from 'react-redux'
import Navbar from './components/navbar/navbar'
import Footer from './components/footer'
import Slider from './components/slideshowComponent/SlideShow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Slider />
        <Footer />
      </div>
    )
  }
}
// const mapStateToProps = (state, ownProps)

export default connect()(App);


