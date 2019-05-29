import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/dist/js/swiper.esm'
import { ImgList } from '../Img';
import './Welfare.scss';

class Welfare extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.welfare.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.welfare.clientHeight;
    this.setState({ height });
  }

  render() {
    const params = {
      modules: [Pagination, Autoplay, EffectFade],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        slide:false
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      EffectFade: {
        fadeEffect: {
          crossFade: true,
        }
      },
      effect: 'fade',
      loop: true
    }
    
    return (
      <div className="welfare-wrap" ref={ (welfare) => this.welfare = welfare }>
        <div className="welfare">
          <h2>Company Welfare</h2>
          <div className="slide-box">
          <Swiper {...params}>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare1} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>01</em>
                <strong>든든한 하루</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
            </div>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare2} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>02</em>
                <strong>자유로운 업무환경​</strong>
                <p>
                  격식이나 시스템보다 자유와<br />
                  상식을 우선하는 회사
                </p>
              </div>
            </div>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare3} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>03</em>
                <strong>탄력 근무제 도입​</strong>
                <p>
                  원하는 근무 시간 선택, 저녁이 있는 삶
                </p>
              </div>
            </div>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare4} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>04</em>
                <strong>자기계발 적극 지원​</strong>
                <p>
                  교육, 도서, 각종 세미나 참가 지원
                </p>
              </div>
            </div>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare5} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>05</em>
                <strong>Work and Life Balance</strong>
                <p>
                  매달 1회 자유로운 맥주파티와 조기퇴근
                </p>
              </div>
            </div>
            <div>
              <div className="img-box"><img src={ImgList.tmp_welfare6} alt="회사이미지"/></div>
              <div className="txt-box">
                <em>06</em>
                <strong>최상의 업무 인프라​</strong>
                <p>
                  최고 사양의 업무 장비 지원<br />
                  넓고 여유 있는 사무실
                </p>
              </div>
            </div>
          </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Welfare;