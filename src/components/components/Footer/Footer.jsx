import React from 'react';
import scss from './Footer.module.scss';
import Logo from '../../../assets/img/logo.png';

import { ReactComponent as FacebookSvg } from '../../../assets/svg/facebook.svg';
import { ReactComponent as InstagramSvg } from '../../../assets/svg/instagram.svg';
import { ReactComponent as TwitterSvg } from '../../../assets/svg/twitter.svg';
import { ReactComponent as LinkedinSvg } from '../../../assets/svg/linkedin.svg';
import { ReactComponent as YoutubeSvg } from '../../../assets/svg/youtube.svg';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={scss.wrapper}>
          <div className={scss.box}>
            <span className={scss['title-one']}>Garden Care</span>
            <p>We are an online plant shop offering
              a wide range of cheap and trendy plants.
            </p>
          </div>
          <div className={scss.box}>
            <span className={scss['title-two']}>Plant Renovation</span>
            <p>We are an online plant shop offering a wide
              range of cheap and trendy plants.
            </p>
          </div>
          <div className={scss.box}>
            <span className={scss['title-three']}>Watering Graden</span>
            <p>We are an online plant shop offering
              a wide range of cheap and trendy plants.
            </p>
          </div>
          <div className={scss.inner}>
            <span>Would you like to join newsletters?</span>
            <form className={scss.form}>
              <input placeholder='enter your email address...' />
              <button>Join</button>
            </form>
            <p>
              We usually post offers and challenges in newsletter.
              We're your online houseplant destination.
              We offer a wide range of houseplants and accessories
              shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>
        <div className={scss.wrapping}>
          <div className={scss.logo}>
            <img src={Logo} alt="Logotype" />
          </div>
          <address className={scss.address}>
            <a className={scss.map} href="https://www.google.com/maps/place/%D0%91%D0%B0%D0%BA%D1%83,+%D0%90%D0%B7%D0%B5%D1%80%D0%B1%D0%B0%D0%B9%D0%B4%D0%B6%D0%B0%D0%BD/@40.4011256,49.7776211,11.5z/data=!4m5!3m4!1s0x40307d6bd6211cf9:0x343f6b5e7ae56c6b!8m2!3d40.4092617!4d49.8670924" target="_blank" rel="noopener noreferrer">
              70 West Buckingham Ave.
              Farmingdale, NY 11735
            </a>
            <a className={scss.email} href="mailto:aqshin.baghirzade@gmail.com">aqshin.baghirzade@gmail.com</a>
            <a className={scss.phone} href="tel:(+994)2265084">+994 226 50 84</a>
          </address>
        </div>
        <div className={scss.wrap}>
          <div className={scss.items}>
            <h3 className={scss.title}>My Account</h3>
            <nav>
              <ul className={scss.list}>
                <li>My Account</li>
                <li>Our stores</li>
                <li>Contact us</li>
                <li>Career</li>
                <li>Specials</li>
              </ul>
            </nav>
          </div>
          <div className={scss.items}>
            <h3 className={scss.title}>Help & Guide</h3>
            <nav>
              <ul className={scss.list}>
                <li>Help Center</li>
                <li>How to Buy</li>
                <li>Shipping & Delivery</li>
                <li>Product Policy</li>
                <li>How to Return</li>
              </ul>
            </nav>
          </div>
          <div className={scss.items}>
            <h3 className={scss.title}>Categories</h3>
            <nav>
              <ul className={scss.list}>
                <li>House Plants</li>
                <li>Potter Plants</li>
                <li>Seeds</li>
                <li>Small Plants</li>
                <li>Accessories</li>
              </ul>
            </nav>
          </div>
          <div className={scss.items}>
            <h3 className={scss.title}>Social Media</h3>
            <ul className={scss.networks}>
              <li>
                <button type='button'>
                  <FacebookSvg />
                </button>
              </li>
              <li>
                <button type='button'>
                  <InstagramSvg />
                </button>
              </li>
              <li>
                <button type='button'>
                  <TwitterSvg />
                </button>
              </li>
              <li>
                <button type='button'>
                  <LinkedinSvg />
                </button>
              </li>
              <li>
                <button type='button'>
                  <YoutubeSvg />
                </button>
              </li>
            </ul>
            <h3 className={scss.title}>We accept</h3>
            <div className={scss.visa}>
            </div>
          </div>
        </div>
        <span className={scss.span}>© 2021 GreenShop. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;