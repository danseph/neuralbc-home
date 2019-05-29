import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { ImgList } from '../Img';
import './Location.scss';

const AnyReactComponent = () => <div className="marker-name"><img src={ImgList.pin} alt="이미지" /></div>;

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
              bootstrapURLKeys={{ key: "AIzaSyCqlzBrI9Gxwh4bTQm65IPU6Y-l7AQbw6g" }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={37.514229}
                lng={127.053460}
              />
            </GoogleMapReact>
          </div>
          <h2>Contact Us</h2>
          <div className="txt-box">
            <ul className="desc">
              <li>
                <strong>㈜뉴럴비씨</strong>
                <span>서울 강남구 봉은사로81길 15 11테라스</span>
              </li>
              <li>
                <strong>채용문의</strong>
                <span>recruit@neuralbc.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Location;