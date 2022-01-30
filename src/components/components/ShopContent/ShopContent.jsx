import React from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import scss from './ShopContent.module.scss'
import Products from '../Products/Products';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';

import BannerImg from '../../../assets/img/sideBanner.png';

const ShopContent = () => {
  const { pathname } = useLocation();

  return (
    <React.Fragment>
      {pathname === '/shop' &&
        <div className={scss.img}>
        </div>}
      {pathname === '/shop' && <Breadcrumbs />}
      <div className={scss.wrapper}>
        <div className={scss.image}>
          <img src={BannerImg} alt="sale 70%" />
        </div>
        <Products />
      </div>
    </React.Fragment>
  );
};

export default ShopContent;