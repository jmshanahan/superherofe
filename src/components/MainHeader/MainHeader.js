import React from 'react';
import classes from './MainHeader.module.css';
import logo from '../../assets/400PngdpiLogoCropped.png';
const MainHeader = (props) => {
  return (
    <header className={classes['main-header']}>
      <div>
      <img src={logo} alt="logo"/>

      </div>
    </header>
  );
};

export default MainHeader;
