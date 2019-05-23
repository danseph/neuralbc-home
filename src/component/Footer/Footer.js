/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrap">
        <div className="footer">
          <div className="sns-btn">
            <a href="#" className="youtube"><span>유튜브 바로가기</span></a>
            <a href="#" className="twitter"><span>트위터 바로가기</span></a>
            <a href="#" className="facebook"><span>패이스북 바로가기</span></a>
          </div>
          <div className="copylight">
            <address>
              (주)누럴비씨  |  사업자등록번호 123-456-7890  |  대표 이두원<br />
              &copy;2018 NeuralBC Pte., Ltd. All rights reserved.
            </address>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;