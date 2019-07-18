import React, { Component } from 'react';
import './Careers.scss';

class Careers extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.careers.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.careers.clientHeight;
    this.setState({ height });
  }

  render() {
    return (
      <div className="careers-wrap" ref={ (careers) => this.careers = careers }>
        <div className="careers">
          <h2>We are Hiring!</h2>
          <strong>뉴럴비씨와 함께 성장 할 인재를 찾습니다!</strong>
          <p>
            우리는 다양한 서비스 개발을 위해 모든 직군에 대해서​ 채용을 진행하고 있습니다​<br />
            창의적이고 도전적이신 분이라면 채용 공고에 없는 직군이라도 편하게 문의 및 지원 부탁드립니다
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