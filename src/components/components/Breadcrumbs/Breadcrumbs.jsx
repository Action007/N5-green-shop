import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import scss from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ title }) => {
  const { pathname } = useLocation();
  const { id } = useParams();
  let breadcrumbs;

  if (pathname === '/shop') {
    breadcrumbs = (
      <>
        <NavLink className={scss.link} to='/'>Home</NavLink>
        <span className={scss.span}>Shop</span>
      </>
    );
  }


  if (pathname === '/shopping-cart') {
    breadcrumbs = (
      <>
        <NavLink className={scss.link} to='/'>Home</NavLink>
        <NavLink className={scss.link} to='/shop'>Shop</NavLink>
        <span className={scss.span}>Shopping Cart</span>
      </>
    );
  }

  if (pathname === '/about') {
    breadcrumbs = (
      <>
        <NavLink className={scss.link} to='/'>Home</NavLink>
        <span className={scss.span}>About</span>
      </>
    );
  }

  if (pathname === '/contacts') {
    breadcrumbs = (
      <>
        <NavLink className={scss.link} to='/'>Home</NavLink>
        <span className={scss.span}>Contacts</span>
      </>
    );
  }

  if (id) {
    breadcrumbs = (
      <>
        <NavLink className={scss.link} to='/'>Home</NavLink>
        <NavLink className={scss.link} to='/shop'>Shop</NavLink>
        <span className={scss.span}>{title}</span>
      </>
    );
  }

  return (
    <div className={scss.breadcrumbs}>
      {breadcrumbs}
    </div>
  );
};

export default Breadcrumbs;