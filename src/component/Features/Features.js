import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm'
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
    const height = this.features.clientHeight;
    this.setState({ height });
  }

  render() {
    const params = {
      modules: [Navigation],
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      },
      renderPrevButton: () => <button className="swiper-prev"></button>,
      renderNextButton: () => <button className="swiper-next"></button>,
      loop: true,
    }

    return (
      <div className="features-wrap" ref={ (features) => this.features = features }>
        <div className="features">
          <h2>Our<br /> Workspace</h2>
          <div className="img-box">
            <Swiper {...params}>
              <div><img src={ImgList.tmp_feature1} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature2} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature3} alt="이미지"/></div>
              <div><img src={ImgList.tmp_feature4} alt="이미지"/></div>
            </Swiper>
          </div>
          <p>
            모던스타일은 장식적인 요소를 배제하고 기능성과 실용성을 강조하면서 산뜻하고 세련된 느낌을 추구하며 블랙과 화이트의 강렬한 대비로 심플한 이미지를 부각시키고 주로 짙은 윌넛과의 매치로 세련된 조화를 이룬 스타일이다.
          </p>
        </div>
      </div>
    );
  }
}

export default Features;