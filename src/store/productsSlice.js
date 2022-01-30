import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    filterRange: [],
    filterProducts: [],
    multiRange: { min: 0, max: 300 },
    loading: false
  },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.filterProducts = action.payload;
      state.filterRange = action.payload;
    },
    filterProducts(state, action) {
      if (action.payload === "all") {
        state.filterProducts = state.products;
        state.filterRange = state.products;
        state.multiRange = { ...state.multiRange };
      }

      if (action.payload === "rating") {
        const sort1 = state.filterRange.sort((a, b) => b.rating - a.rating);
        const sort2 = state.filterProducts.sort((a, b) => b.rating - a.rating);

        state.filterRange = sort1;
        state.filterProducts = sort2;
      }

      if (action.payload === "low-high") {
        const sort1 = state.filterRange.sort((a, b) => {
          const priceA = a.newPrice ? a.newPrice : a.price;
          const priceB = b.newPrice ? b.newPrice : b.price;
          return priceA - priceB;
        });
        const sort2 = state.filterProducts.sort((a, b) => {
          const priceA = a.newPrice ? a.newPrice : a.price;
          const priceB = b.newPrice ? b.newPrice : b.price;
          return priceA - priceB;
        });

        state.filterRange = sort1;
        state.filterProducts = sort2;
      }

      if (action.payload === "high-low") {
        const sort1 = state.filterRange.sort((a, b) => {
          const priceA = a.newPrice ? a.newPrice : a.price;
          const priceB = b.newPrice ? b.newPrice : b.price;
          return priceB - priceA;
        });
        const sort2 = state.filterProducts.sort((a, b) => {
          const priceA = a.newPrice ? a.newPrice : a.price;
          const priceB = b.newPrice ? b.newPrice : b.price;
          return priceB - priceA;
        });

        state.filterRange = sort1;
        state.filterProducts = sort2;
      }
    },
    multiRangeFilter(state, action) {
      const sort = state.filterProducts.filter(product => {
        const price = product.newPrice ? product.newPrice : product.price;
        return price >= action.payload.min && price <= action.payload.max;
      });

      state.filterRange = sort;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    }
  },
});

export const productActions = productSlice.actions;

export default productSlice;