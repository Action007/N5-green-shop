import React from 'react';
import Product from '../Product/Product';
import './ProductsSlider.scss';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useSelector } from 'react-redux';

SwiperCore.use([Autoplay, Pagination])

const ProductsSlider = () => {
  const data = useSelector((state) => state.products.products);
  const productsData = [...data].splice(0, 12);

  const products = productsData.map((product) => (
    <SwiperSlide key={product.id}>
      <Product
        description={product.description}
        id={product.id}
        image={product.image}
        price={product.price}
        newPrice={product.newPrice}
        rating={product.rating}
        title={product.title}
      />
    </SwiperSlide>
  ));

  return (
    <div className="products-slider">
      <span className="products-slider__heading">
        Releted Products
      </span>
      <Swiper
        breakpoints={{
          1000: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          550: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          480: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 25
          }
        }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={30}
      >
        {products}
      </Swiper>
    </div>
  );
};

export default ProductsSlider;