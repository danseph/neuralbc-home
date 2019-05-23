import React, { Component } from 'react';
import './Careers.scss';

class Careers extends Component {
  render() {
    return (
      <div className="careers-wrap">
        <div className="careers">
          <h2>We are hiring</h2>
          <strong>뉴럴비씨와 함께 성장 할 인재를 찾습니다</strong>
          <p>
            우리는 더 나은 예측 기술 개발을 통하여 블록체인 생태계의 불확실성을 해소하기 위해 연구개발 하고 있습니다.<br />
            다양한 서비스 개발을 위해 창의적이고 도전적인 인재를 모집중에 있으니, 많은 지원 바랍니다. 
          </p>
          <div className="btn-box">
            <a href="http://www.saramin.co.kr/zf_user/company-info/view-inner-recruit?csn=5378801038" target="_blank" rel="noopener noreferrer">진행중인 채용 보러가기</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Careers;