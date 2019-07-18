/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import { ImgList } from '../Img';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
      lastScrollY : 0,
      active: 'about',
      isModify : false,
      scrollUp : [],
      mMenu: ''
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.scrollHeightModify);
    window.addEventListener('scroll', this.checkScrollHeight);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.checkScrollHeight);
  }
  
  // 윈도우 스크롤 높이 확인
  checkScrollHeight = () => {
    if(window.scrollY){
      this.setState({
        lastScrollY : window.scrollY
      });
    }
  }

  // 스크롤 높이별로 메뉴 active
  scrollEvent = () => {
    var activeName = ['about', 'features', 'life', 'careers','partner', 'location'];
    var result = 'about';

    for(var i = 0; i< this.state.scrollUp.length; i++){
      if(this.state.lastScrollY < this.state.scrollUp[0]) {
        result = 'about';
      }else{
        if(this.state.lastScrollY >= this.state.scrollUp[i]  && this.state.lastScrollY <= this.state.scrollUp[i+1]) {
          result = activeName[i+1];
        }        
      } 
    }
    
    return result;
  }
  
  // 가져온 스크롤 높이 합산해서 수정
  scrollHeightModify = () => {
    var scrollUp = [];

    for(var i = 0; i < this.props.heightArray.length; i++){
      if( i !== 0){
        scrollUp[i] = this.props.heightArray[i] + scrollUp[i-1];
      }else{
        scrollUp[i] = this.props.heightArray[i]
      }
    }    
    this.setState({isModify: true , scrollUp: scrollUp});
  }

  // 모바일 메뉴 닫기
  closeMenuEvent = () => {
    this.setState({mMenu: ''});
  }

  // 모바일 메뉴 열기
  openMenuEvent = () => {
    this.setState({mMenu: 'open'});
  }

  render() {
    if(!this.state.isModify  && this.props.heightArray.length !== 0){
      this.scrollHeightModify();
    }else{
      this.scrollEvent();
    }

    return (
      <>
        <div 
          className={ 
            (window.scrollY > 0 ? 'header-wrap active' : 'header-wrap') +
            (this.state.mMenu === 'open' ? ' open' : '')
          }
        >
          <header className="header">
            <h1>
              <a href="#">
                <img src={ImgList.logo_ico} alt="로고"/>
              </a>
            </h1>
            <nav className="nav">
              <a href="#" 
                className={this.scrollEvent() === 'about' ? 'active' : ''}
                onClick={() => scroll.scrollTo(0, this.closeMenuEvent())}
              >ABOUT</a>
              <a href="#" 
                className={this.scrollEvent() === 'features' ? 'active' : ''}
                onClick={() => scroll.scrollTo(this.state.scrollUp[0], this.closeMenuEvent())}
              >CULTURE</a>
              <a href="#" 
                className={this.scrollEvent() === 'life' ? 'active' : ''}
                onClick={() => scroll.scrollTo(this.state.scrollUp[1], this.closeMenuEvent())}
              >WELFARE</a>
              <a href="#" 
                className={this.scrollEvent() === 'careers' ? 'active' : ''}
                onClick={() => scroll.scrollTo(this.state.scrollUp[2], this.closeMenuEvent())}
              >CAREERS</a>
              <a href="#" 
                className={this.scrollEvent() === 'partner' ? 'active' : ''}
                onClick={() => scroll.scrollTo(this.state.scrollUp[3], this.closeMenuEvent())}
              >PARTNER</a>
              <a href="#" 
                className={this.scrollEvent() === 'location' ? 'active' : ''}
                onClick={() => scroll.scrollTo(this.state.scrollUp[4], this.closeMenuEvent())}
              >LOCATION</a>
            </nav>
            <a href="#" className="btn-x" onClick={() => this.closeMenuEvent()}><span>닫기</span></a>
          </header>
        </div>
        <a href="#" 
          className={(this.state.mMenu === 'open' ? 'btn-menu off' : 'btn-menu')} 
          onClick={() => this.openMenuEvent()}
        ><span>메뉴</span></a>
      </>
    );
  }
}

export default Header;