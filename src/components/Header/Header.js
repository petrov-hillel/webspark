import React from 'react';
import logo from '../../assets/logo.svg';
import DatePickerComp from '../DatePickerComp/DatePickerComp';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper container">
        <div className="header__logo">
          <img src={logo} alt="webspark" />
        </div>
        <div className="header__content">
          <div className="header__site">
            <span className="header__site-name">monblanproject</span>
            <div className="header__site-start">Start on 17-02-2016</div>
          </div>
          <div className="header__info">
            <div className="header__info-block">
              <span>870</span> posts
            </div>
            <div className="header__info-block">
              <span>11,787</span> followers
            </div>
            <div className="header__info-block">
              <span>112</span> following
            </div>
          </div>
          <DatePickerComp />
        </div>
      </div>
    </header>
  );
};

export default Header;
