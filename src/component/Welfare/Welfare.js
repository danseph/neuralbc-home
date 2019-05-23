import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
// import { Pagination } from 'swiper/dist/js/swiper.esm'
import { ImgList } from '../Img';
import './Welfare.scss';

class Welfare extends Component {
  render() {
    const params1 = {
      loop: true,
    }

    const params2 = {
      // modules: [Pagination],
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
      loop: true,
    }

    return (
      <div className="welfare-wrap">
        <div className="welfare">
          <h2>Company welfare</h2>
          <div className="img-box">
          <Swiper {...params1}>
            <div><img src={ImgList.tmp_welfare1} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare2} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare3} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare4} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare5} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare6} alt="회사이미지"/></div>
            <div><img src={ImgList.tmp_welfare7} alt="회사이미지"/></div>
          </Swiper>
          </div>
          <div className="txt-box">
            <Swiper {...params2}>
              <div>
                <em>01</em>
                <strong>굶지 말고 일하세요</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>02</em>
                <strong>자유로운 발언​</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>03</em>
                <strong>굶지 말고 일하세요</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>04</em>
                <strong>즐거운 휴식 = 효율 상승​</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>05</em>
                <strong>굶지 말고 일하세요</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>06</em>
                <strong>굶지 말고 일하세요</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
              <div>
                <em>07</em>
                <strong>굶지 말고 일하세요</strong>
                <p>
                  조식ㆍ중식ㆍ석식ㆍ간식 제공<br />
                  카페테리아 운영
                </p>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    );
  }
}

export default Welfare;