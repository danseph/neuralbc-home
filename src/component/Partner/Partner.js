import React, { Component } from 'react';
import { ImgList } from '../Img';
import './Partner.scss';

class Partner extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.partner.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.partner.clientHeight;
    this.setState({ height });
  }

  render() {
    return (
      <div className="partner-wrap" ref={ (partner) => this.partner = partner }>
        <div className="partner">
          <h2>Partner</h2>
          <a href="http://cosmicbc.com/">
            <div className="logo">
              <img src={ImgList.cosmicbc} alt="cosmicBC 로고"/>
            </div>
          </a>

        </div>
      </div>
      
    );
  }
}

export default Partner;