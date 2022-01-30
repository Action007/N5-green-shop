import React from 'react';
import scss from './Product.module.scss'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';

import { ReactComponent as BasketSvg } from '../../../assets/svg/basket.svg';
import { ReactComponent as SearchSvg } from '../../../assets/svg/search.svg';
import { ReactComponent as StarSvg } from '../../../assets/svg/star.svg';

const Product = ({ description, id, image, price, rating, title, newPrice }) => {
  const dispatch = useDispatch();
  const route = useHistory()

  const addProductHandler = () => {
    dispatch(cartActions.addItemToCart({
      description,
      id,
      image,
      price,
      newPrice,
      title,
      amount: 1
    }));
  };

  return (
    <li className={scss.wrap}>
      <div className={scss.img}>
        <img src={image} alt={description} />
        <div className={scss.buttons}>
          <button className={scss.button} onClick={addProductHandler}>
            <BasketSvg />
          </button>
          <button className={scss.button} type='button' onClick={() => route.push(`/products/${id}`)}>
            <SearchSvg />
          </button>
        </div>
      </div>
      <div className={scss.inner}>
        <button className={scss.name} type='button' onClick={() => route.push(`/products/${id}`)}>
          {title}
        </button>
        <div className={scss.wrapper}>
          {newPrice ?
            <div>
              <span className={scss.price}>
                ${newPrice}
              </span>
              <del className={scss.del}>${price}</del>
            </div>
            :
            <span className={scss.price}>
              ${price}
            </span>
          }
          <span className={scss.star}>
            {rating}
            <StarSvg />
          </span>
        </div>
      </div>
    </li>
  );
};

export default Product;