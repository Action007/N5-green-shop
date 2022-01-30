import React from 'react';
import scss from './FindMore.module.scss';

import Plants1 from '../../../assets/img/plants1.png';
import Plants2 from '../../../assets/img/plants2.png';

import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow-right.svg';
import { NavLink } from 'react-router-dom';

const FindMore = () => {
  return (
    <section className={scss.wrapper}>
      <div className={scss.wrap}>
        <div className={scss.img}>
          <img src={Plants1} alt="Plants" />
        </div>
        <div className={scss.inner}>
          <h3 className={scss.title}>SUMMER CACTUS & SUCCULENTS</h3>
          <p className={scss.text}>
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <NavLink className={scss.button} to='/shop'>
            Find More
            <ArrowRight />
          </NavLink>
        </div>
      </div>
      <div className={scss.wrap}>
        <div className={scss.img}>
          <img src={Plants2} alt="Plants" />
        </div>
        <div className={scss.inner}>
          <h3 className={scss.title}>STYLING TRENDS & MUCH MORE</h3>
          <p className={scss.text}>
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <NavLink className={scss.button} to='/shop'>
            Find More
            <ArrowRight />
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default FindMore;