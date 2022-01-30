import React from 'react';
import { NavLink } from 'react-router-dom';
import scss from './MainBanner.module.scss'
import BannerImg from '../../../assets/img/banner.png'

const MainBanner = () => {
  return (
    <section className={scss.wrapper}>
      <div className={scss.wrap}>
        <span className={scss.span}>WELCOME TO GREENSHOP</span>
        <h3 className={scss.title}>
          LET'S MAKE A BETTER <span>PLANET</span>
        </h3>
        <p className={scss.text}>
          We are an online plant shop offering a wide range of cheap
          and trendy plants. Use our plants to create an unique
          Urban Jungle. Order your favorite plants!
        </p>
        <NavLink className={scss.button} to='/shop'>SHOP NOW</NavLink>
      </div>
      <div className={scss.img}>
        <img src={BannerImg} alt="Plants" />
      </div>
    </section>
  );
};

export default MainBanner;