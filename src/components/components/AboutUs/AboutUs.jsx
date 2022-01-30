import React from 'react';
import scss from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <React.Fragment>
      <div className={scss.wrap}>
        <h2 className={scss.title}>Who we are and what we do</h2>
        <p className={scss.subtitle}>
          Here you can find a lot of interesting and useful information
          that you need in gardening and creating a beautiful garden
        </p>
      </div>
      <div className={scss.wrapper}>
        <div className={scss.inner}>
          <span className={scss.heading}>
            Green Shop - the best plant store
          </span>
          <div className={scss.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente quam, reprehenderit provident iste facilis voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam explicabo dolores unde nulla delectus, dolore provident quis, neque cupiditate quos expedita quisquam veritatis officia facere repudiandae, dignissimos doloremque! Numquam!
            </p>
            <p>
              Qui quae odio et labore atque minima voluptatem magnam magni quas dolorem cum ipsa laboriosam maiores aliquid, distinctio ratione, corrupti hic dolorum adipisci. Velit harum modi cumque repellendus! Voluptatibus, magni!
            </p>
          </div>
        </div>
        <div className={scss.image}>
        </div>
      </div>
      <div className={scss.wrapper}>
        <div className={scss.img}>
        </div>
        <div className={scss.inner}>
          <span className={scss.heading}>
            Our story
          </span>
          <div className={scss.text}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Sapiente quam, reprehenderit provident iste facilis voluptatibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem laboriosam explicabo dolores unde nulla delectus, dolore provident quis, neque cupiditate quos expedita quisquam veritatis officia facere repudiandae, dignissimos doloremque! Numquam!
            </p>
            <p>
              Qui quae odio et labore atque minima voluptatem magnam magni quas dolorem cum ipsa laboriosam maiores aliquid, distinctio ratione, corrupti hic dolorum adipisci. Velit harum modi cumque repellendus! Voluptatibus, magni!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;