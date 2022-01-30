import React, { useState } from 'react';
import './ProductDetails.scss';
import Loading from '../../UI/LoadingProducts';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';
import { useSelector } from 'react-redux';

import { ReactComponent as FacebookSvg } from '../../../assets/svg/facebook.svg';
import { ReactComponent as TwitterSvg } from '../../../assets/svg/twitter.svg';
import { ReactComponent as LinkedinSvg } from '../../../assets/svg/linkedin.svg';
import { ReactComponent as EmailSvg } from '../../../assets/svg/email.svg';
import { ReactComponent as StarSvg } from '../../../assets/svg/star.svg';

const ProductDetails = ({ description, id, image, price, newPrice, rating, title }) => {
  const [amount, setAmount] = useState(1)
  const loading = useSelector((state) => state.products.loading);
  const dispatch = useDispatch();

  const addProductHandler = () => {
    dispatch(cartActions.addItemToCart({
      description,
      id,
      image,
      price,
      newPrice,
      title,
      amount: amount
    }));
  };

  const minusAmountHandler = () => {
    if (amount !== 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  const plusAmountHandler = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const img = (
    <div className="product-slider__showcase">
      <img src={image} alt={description} />
    </div>
  );

  const imgBtn = (
    <React.Fragment>
      <li className="product-slider__btn">
        <img className="product-slider__src" src={image} alt={description} />
      </li>
      <li className="product-slider__btn">
        <img className="product-slider__src" src={image} alt={description} />
      </li>
      <li className="product-slider__btn">
        <img className="product-slider__src" src={image} alt={description} />
      </li>
    </React.Fragment>
  );

  const loader = (
    <React.Fragment>
      <Loading height={100} width={100} />
      <Loading height={100} width={100} />
      <Loading height={100} width={100} />
    </React.Fragment>
  );

  return (
    <div>
      <div className="card">
        <div className="product-slider">
          {!loading ? img : <Loading height={444} width={444} />}
          <ul className="product-slider__select">
            {!loading ? imgBtn : loader}
          </ul>
        </div>
        <div className="product-content">
          <h2 className="product-content__title">{title}</h2>
          <div className="product-content__wrapper">
            {newPrice ?
              <div>
                <span className="product-content__price">
                  ${newPrice}
                </span>
                <del className="product-content__del">
                  ${price}
                </del>
              </div>
              :
              <span className="product-content__price">
                ${price}
              </span>
            }
            <span className="product-content__star">
              {rating}
              <StarSvg />
            </span>
          </div>
          <span className="product-content__subtitle">
            Short Description:
          </span>
          <div className="product-content__text">
            <p>
              The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
            </p>
          </div>
          <div className="product-content__number">
            <div className="product-content__wrap">
              <button
                className="product-content__btn _minus"
                type="button"
                onClick={minusAmountHandler}
              >
              </button>
              <span className="product-content__num">
                {amount}
              </span>
              <button
                className="product-content__btn _plus"
                type="button"
                onClick={plusAmountHandler}
              >
              </button>
            </div>
            <button className="product-content__basket" onClick={addProductHandler}>
              ADD TO CART
            </button>
          </div>
          <div className="product-content__details">
            <span>SKU: </span>1995751877966
          </div>
          <div className="product-content__details">
            <span>Categories: </span>Potter Plants
          </div>
          <div className="product-content__details">
            <span>Tags: </span>Home, Garden, Plants
          </div>
          <div className="product-content__networks">
            <span>Share this products: </span>
            <FacebookSvg />
            <TwitterSvg />
            <LinkedinSvg />
            <EmailSvg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;