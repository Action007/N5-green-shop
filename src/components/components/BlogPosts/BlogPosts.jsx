import React from 'react';
import scss from './BlogPosts.module.scss';

import post1 from '../../../assets/img/01.jpg';
import post2 from '../../../assets/img/02.jpg';
import post3 from '../../../assets/img/03.jpg';
import post4 from '../../../assets/img/04.jpg';

import { ReactComponent as ArrowRight } from '../../../assets/svg/arrow-right.svg';


const BlogPosts = () => {
  return (
    <section className={scss.section}>
      <h2 className={scss.title}>
        Our Blog Posts
      </h2>
      <p className={scss.subtitle}>
        We are an online plant shop offering
        a wide range of cheap and trendy plants.
      </p>
      <div className={scss.wrapper}>
        <div className={scss.wrap}>
          <div className={scss.img}>
            <img src={post1} alt="Plants" />
          </div>
          <div className={scss.inner}>
            <span>
              September 12  I Read in 6 minutes
            </span>
            <h3 className={scss.heading}>
              Cactus & Succulent
              Care Tips
            </h3>
            <p className={scss.text}>
              Cacti are succulents are easy
              care plants for any home or patio.
            </p>
            <button className={scss.button}>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={scss.wrap}>
          <div className={scss.img}>
            <img src={post2} alt="Plants" />
          </div>
          <div className={scss.inner}>
            <span>
              September 13  I Read in 2 minutes
            </span>
            <h3 className={scss.heading}>
              Top 10 Succulents for
              Your Home
            </h3>
            <p className={scss.text}>
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <button className={scss.button}>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={scss.wrap}>
          <div className={scss.img}>
            <img src={post3} alt="Plants" />
          </div>
          <div className={scss.inner}>
            <span>
              September 15  I Read in 3 minutes
            </span>
            <h3 className={scss.heading}>
              Cacti & Succulent
              Care Tips
            </h3>
            <p className={scss.text}>
              Cacti and succulents thrive in containers and because most are..
            </p>
            <button className={scss.button}>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className={scss.wrap}>
          <div className={scss.img}>
            <img src={post4} alt="Plants" />
          </div>
          <div className={scss.inner}>
            <div className={scss.box}>
              <span>
                September 15  I Read in 2 minutes
              </span>
              <h3 className={scss.heading}>
                Best Houseplants
                Room by Room
              </h3>
              <p className={scss.text}>
                The benefits of houseplants are endless. In addition to..
              </p>
            </div>
            <button className={scss.button}>
              Read More
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;