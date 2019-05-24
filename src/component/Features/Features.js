import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Navigation, Autoplay } from 'swiper/dist/js/swiper.esm'
import { ImgList } from '../Img';
import './Features.scss';

class Features extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.features.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.features.clientHeight;
    this.setState({ height });
  }

  render() {
    const params = {
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      renderPrevButton: () => <button className="swiper-prev"></button>,
      renderNextButton: () => <button className="swiper-next"></button>,
      loop: true,
    }

    return (
      <div className="features-wrap" ref={ (features) => this.features = features }>
        <div className="features">
          <h2>Our<br /> Culture​</h2>
          <div className="img-box">
            <Swiper {...params}>
              <div><img src={ImgList.tmp_feature1} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature2} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature3} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature4} alt="이미지"/></div>
            </Swiper>
          </div>
          <p>
            우리는 최고의 인재와 함께 일하길 원하지 않습니다.​
            우리가 함께 일하고 싶은 인재는 최고 중의 최고여야 합니다.​
            우리는 구성원에게 자유와 책임을 보장하고, 동종 업계 ​
            최고의 대우를 제공하는 소수 정예의 회사를 추구합니다.​
          </p>
        </div>
      </div>
    );
  }
}

export default Features;