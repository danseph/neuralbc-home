import React, { Component } from 'react';
import { ImgList } from '../Img';
import './About.scss';

class About extends Component {

  constructor(props) {
    super(props)
    this.state = {
      height : 0,
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateHeight);

    const height = this.about.clientHeight;
    this.setState({ height });
  }

  updateHeight = () => {
    const height = this.about.clientHeight;
    this.setState({ height });
  }

  render() {
    return (
      <div className="about-wrap" ref={ (about) => this.about = about }>
        <div className="main">
          <div className="logo">
            <img src={ImgList.logo} alt="neuralBC 로고"/>
          </div>
          <div className="txt">
            <strong>The future is now  And We are making it</strong>
            <p>
              오늘날 우리는 블록체인의 미래를 체감하고 있습니다.<br />
              사람과 삶을 발전시키고 불편을 해소하며 이러한 편리함이 우리의 삶에 안착할 수 있다고 믿습니다.
            </p>
          </div>
        </div>
        <div className="about">
          <div className="img-box">
            <img src={ImgList.tmp_about} alt="이미지"/>
          </div>
          <div className="txt-box">
            <strong>
              The evolution of blockchain technology
            </strong>
            <p>
              ㈜뉴럴비씨는 인공지능과 블록체인 기술을 연구ㆍ개발하여​
              실생활에서 적용 가능한 서비스 융합을 목표로 하며,​
              싱가포르 본사와 한국 및 중국에 지사가 있습니다.​<br />
              우리는 기술 개발과 새로운 도전에 지원을 아끼지 않으며,​
              자기 생각을 편하게 이야기하고, 서로를 존중하며​
              창의적인 협업을 이룰 수 있도록 합니다. ​
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;