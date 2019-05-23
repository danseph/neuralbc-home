/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { ImgList } from '../Img';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastScrollY : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log("test");
  }

  handleScroll = () => {
    this.setState({lastScrollY : window.scrollY});
  }

  render() {
    return (
      <div className={ this.state.lastScrollY > 0 ? 'header-wrap active' : 'header-wrap'}>
        <header className="header">
          <h1>
            <a href="#">
              <img src={ImgList.logo_ico} alt="로고"/>
            </a>
          </h1>
          <nav className="nav">
            <a href="#" className="active">About</a>
            <a href="#">Features</a>
            <a href="#">Life</a>
            <a href="#">Careers</a>
            <a href="#">Location</a>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;