import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ProductsSlider from '../ProductsSlider/ProductsSlider';
import Item from './Item/Item';
import scss from './ShoppingCart.module.scss';
import emptyBasketImg from '../../../assets/img/empty-basket.png'

const ShoppingCart = () => {
  const state = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);


  const items = state.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      image={item.image}
      description={item.description}
      title={item.title}
      price={item.price}
      quantity={item.quantity}
      totalPrice={item.totalPrice}
    />
  ));

  const EmptyBasket = (
    <div className={scss.empty}>
      <div className={scss.img}>
        <img src={emptyBasketImg} alt="Empty basket" />
      </div>
      <span>Your cart is empty. Keep shopping to find a plants!</span>
      <NavLink className={scss.button} to='/shop'>Keep shopping</NavLink>
    </div>
  );

  return (
    <React.Fragment>
      <Breadcrumbs />

      <div className={scss.wrapper}>
        <div className={scss.cart}>
          <div className={scss.inner}>
            <div className={scss.head}>Products</div>
            <div className={scss.head}>Price</div>
            <div className={scss.head}>Quantity</div>
            <div className={scss.head}>Total</div>
          </div>
          {items.length ? items : EmptyBasket}
        </div>
        <div className={scss.wrap}>
          <h3 className={scss.heading}>Cart Totals</h3>
          <span className={scss.subtitle}>Coupon Apply</span>
          <form className={scss.form}>
            <label>
              <input placeholder="Enter coupon code here..." />
            </label>
            <button type="button">Apply</button>
          </form>
          <div className={scss.items}>
            <span className={scss.span}>Subtotal</span>
            <span className={scss.price}>
              ${totalPrice ? totalPrice.toFixed(2) : '0.00'}
            </span>
          </div>
          <div className={scss.items}>
            <span className={scss.span}>Coupon Discount</span>
            <span>(-) 00.00</span>
          </div>
          <div className={`${scss.items} ${scss['items--margin']}`}>
            <span className={scss.span}>Shiping</span>
            <span className={scss.price}>$16.00</span>
          </div>
          <div className={scss.items}>
            <span className={scss.total}>Total</span>
            <span className={scss['total-price']}>
              ${totalPrice ? (totalPrice + 16).toFixed(2) : '0.00'}
            </span>
          </div>
          <button className={scss.ok}>Proceed To Checkout</button>
          <NavLink className={scss.cancel} to='/shop'>Continue Shopping</NavLink>
        </div>
      </div>

      <ProductsSlider />
    </React.Fragment>
  );
};

export default ShoppingCart;