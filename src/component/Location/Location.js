import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Location.scss';

class Location extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.location.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.location.clientHeight;
    this.setState({ height });
  }


  static defaultProps = {
    center: {
      lat: 37.514229,
      lng: 127.053460
    },
    zoom: 18
  };

  render() {
    return (
      <div className="location-wrap" ref={ (location) => this.location = location }>
        <div className="location">
          <div className="map-box">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "AIzaSyBxMum7cw3fdySXBjfztMIPDmEQ3kpPd_c" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
              GoogleMapMarkers={'markers'}
            >
            </GoogleMapReact>
          </div>
          <h2>Contact Us</h2>
          <div className="txt-box">
            <strong className="name">㈜뉴럴비씨</strong>
            <p>
              서울 강남구 봉은사로81길 15 11테라스
            </p>
            <ul className="desc">
              <li>
                <strong>채용문의</strong>
                <span>Jenny@neuralbc.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;