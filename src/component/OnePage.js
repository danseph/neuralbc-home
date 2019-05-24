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
      height: 0,
      about: this.about = React.createRef(),
      features: this.features = React.createRef(),
      welfare: this.welfare = React.createRef(),
      careers: this.careers = React.createRef(),
      location: this.location = React.createRef(),
      heightArray: [],
    }
  }

  async componentDidMount() {
    await window.addEventListener('load', this.updateHeight);
    await window.addEventListener('resize', this.updateHeight);
    await window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  updateHeight = () => {
    this.setState({
      heightArray: [
        this.about.current.state.height,
        this.features.current.state.height,
        this.welfare.current.state.height,
        this.careers.current.state.height,
        this.location.current.state.height
      ]
    })
  }

  handleScroll = () => {
    this.setState({lastScrollY : window.scrollY});
    console.log(this.state.lastScrollY, "스크롤 높이")
  }

  render() {
    return (
      <div className="wrap">

        <Header heightArray={this.state.heightArray}/>

        <About ref={this.about}/>

        <Features ref={this.features}/>

        <Welfare ref={this.welfare}/>

        <Careers ref={this.careers}/>

        <Location ref={this.location}/>

        <Footer />

      </div>
    );
  }
}

export default OnePage;