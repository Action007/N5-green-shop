import React, { useEffect, useState } from 'react';
import reactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Logo from '../../../assets/img/logo.png';
import scss from './Header.module.scss';

import { ReactComponent as BasketSvg } from '../../../assets/svg/basket.svg';

const Header = () => {
  const state = useSelector((state) => state.cart.totalQuantity)
  const [activeBurger, setActiveBurger] = useState(false);
  const [scroll, setScroll] = useState(false);
  const burgerClassName = activeBurger ? `${scss['burger-wrap']} ${scss.active}` : scss['burger-wrap'];
  const menuClassName = activeBurger ? `${scss.nav} ${scss.active}` : scss.nav;
  const headerClassName = scroll ? `${scss.header} ${scss.active}` : scss.header;

  useEffect(() => {
    const scrollHandler = () => {
      setScroll(window.scrollY > 50);
    }

    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const burgerMenuHandler = () => {
    setActiveBurger((prevState) => !prevState);
  };

  const Overall = () => {
    return (
      <div className={scss.overall} onClick={burgerMenuHandler}></div>
    )
  };

  return (
    <header className={headerClassName}>
      <NavLink className={scss.logo} to='/' exact>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <nav className={menuClassName}>
        <ul className={scss.links}>
          <li className={scss.link}>
            <NavLink
              activeClassName={scss.active}
              to='/' exact
              onClick={() => setActiveBurger(false)}
            >
              Home
            </NavLink>
          </li>
          <li className={scss.link}>
            <NavLink
              activeClassName={scss.active}
              to='/shop'
              onClick={() => setActiveBurger(false)}
            >
              Shop
            </NavLink>
          </li>
          <li className={scss.link}>
            <NavLink
              activeClassName={scss.active}
              to='/about'
              onClick={() => setActiveBurger(false)}
            >
              About
            </NavLink>
          </li>
          <li className={scss.link}>
            <NavLink
              activeClassName={scss.active}
              to='/contacts' onClick={() => setActiveBurger(false)}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      {activeBurger && reactDom.createPortal(<Overall />,
        document.getElementById('overall'))}
      <div className={scss.wrapper}>
        <NavLink className={scss.basket} to='/shopping-cart' >
          <BasketSvg />
          <span>{state}</span>
        </NavLink>
        <button className={burgerClassName} onClick={burgerMenuHandler}>
          <div type="button">
            <span>
              <span className="sr-only">
                Click to open the menu
              </span>
            </span>
          </div>
        </button>
      </div>

    </header>
  );
};

export default Header;