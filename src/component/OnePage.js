import React, { Component } from 'react';
import Header from './Header/Header';
import About from './About/About';
import Features from './Features/Features';
import Welfare from './Welfare/Welfare';
import Careers from './Careers/Careers';
import Location from './Location/Location';
import Footer from './Footer/Footer';

class OnePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastScrollY : 0,
      ticking : false
    }

    this.about = React.createRef();
    this.features = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({lastScrollY : window.scrollY});

    // console.log(this.state.lastScrollY);
    // console.log(this.features.current.state);
  }

  render() {
    return (
      <div className="wrap">

        <Header />

        <About ref={this.about}/>

        <Features ref={this.features}/>

        <Welfare />

        <Careers />

        <Location />

        <Footer />

      </div>
    );
  }
}

export default OnePage;