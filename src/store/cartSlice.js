import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('appData') ?
  JSON.parse(localStorage.getItem('appData')) : [];
const totalQuantity = localStorage.getItem('appTotalQuantity') ?
  JSON.parse(localStorage.getItem('appTotalQuantity')) : 0;
const totalPrice = localStorage.getItem('totalPrice') ?
  JSON.parse(localStorage.getItem('totalPrice')) : 0;

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items,
    totalQuantity,
    totalPrice
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      const price = newItem.newPrice ? newItem.newPrice : newItem.price;

      state.totalQuantity = state.totalQuantity + newItem.amount;
      state.totalPrice = state.totalPrice + (price * newItem.amount);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: price,
          quantity: newItem.amount,
          totalPrice: price * newItem.amount,
          title: newItem.title,
          image: newItem.image
        });
      } else {
        existingItem.quantity = existingItem.quantity + newItem.amount;
        existingItem.totalPrice = existingItem.totalPrice + (price * newItem.amount);
      }

      localStorage.setItem('appData', JSON.stringify(state.items));
      localStorage.setItem('appTotalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);

      state.totalQuantity = state.totalQuantity - 1;
      state.totalPrice = state.totalPrice - existingItem.price;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity = existingItem.quantity - 1;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }

      if (!state.items.length) {
        state.totalPrice = 0;
        localStorage.clear();
      }

      localStorage.setItem('appData', JSON.stringify(state.items));
      localStorage.setItem('appTotalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
    removeAllItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      state.items = state.items.filter((item) => item.id !== id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalPrice = state.totalPrice - existingItem.totalPrice;

      if (!state.items.length) {
        state.totalPrice = 0;
        localStorage.clear();
      }

      localStorage.setItem('appData', JSON.stringify(state.items));
      localStorage.setItem('appTotalQuantity', JSON.stringify(state.totalQuantity));
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;