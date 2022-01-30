import React, { useEffect, useState } from 'react';
import scss from './Item.module.scss';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../../store/cartSlice';

import { ReactComponent as TrashSvg } from '../../../../assets/svg/trash.svg'
import { ReactComponent as DeleteSvg } from '../../../../assets/svg/delete.svg';

const Item = ({ id, image, description, title, price, quantity, totalPrice }) => {
  const dispatch = useDispatch();
  const [mobileWidth, setMobileWidth] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      const { innerWidth: width } = window;

      if (width <= 768) {
        setMobileWidth(true);
      } else {
        setMobileWidth(false);
      }
    }

    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      image,
      description,
      title,
      price,
      quantity,
      totalPrice,
      amount: 1
    }));
  };

  const removeAllItemHandler = () => {
    dispatch(cartActions.removeAllItemFromCart(id));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  const desktop = (
    <>
      <div className={scss.img}>
        <img src={image} alt={description} />
      </div>
      <div className={scss.name}>
        {title}
      </div>
      <span className={scss.price}>${price}</span>
      <div className={scss.inner}>
        <button className={scss.minus} onClick={removeItemHandler}></button>
        <span className={scss.quantity}>{quantity}</span>
        <button className={scss.plus} onClick={addItemHandler}></button>
      </div>
      <span className={scss['total-price']}>${totalPrice.toFixed(2)}</span>
      <button className={scss.trash} onClick={removeAllItemHandler}>
        <TrashSvg />
      </button>
    </>
  );

  const mobile = (
    <>
      <button className={scss.delete} onClick={removeAllItemHandler}>
        <DeleteSvg />
      </button>
      <div className={scss.wrap}>
        <div className={scss.name}>
          {title}
        </div>
        <div className={scss.img}>
          <img src={image} alt={description} />
        </div>
      </div>
      <div className={scss.wrap}>
        <span className={scss.desc}>AMOUNT</span>
        <div className={scss.inner}>
          <button className={scss.minus} onClick={removeItemHandler}></button>
          <span className={scss.quantity}>{quantity}</span>
          <button className={scss.plus} onClick={addItemHandler}></button>
        </div>
      </div>
      <div className={scss.wrap}>
        <span className={scss.desc}>PRICE</span>
        <span className={scss.price}>${price}</span>
      </div>
      <div className={scss.wrap}>
        <span className={scss.desc}>TOTAL</span>
        <span className={scss['total-price']}>${totalPrice.toFixed(2)}</span>
      </div>
    </>
  );


  return (
    <div className={scss.wrapper}>
      {mobileWidth ? mobile : desktop}
    </div>
  );
};

export default Item;