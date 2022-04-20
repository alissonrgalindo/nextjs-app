import { createSlice } from '@reduxjs/toolkit';
const Initial = {
  returned: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    
    addToCart: (state, action) => {
      const productExists = state.find((product) => product.sku === action.payload.sku);
      if (productExists) {
        productExists.quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action, value) => {
      const product = state.find((product) => product.sku === action.payload);
      if (product.quantity < product.stockLevel) {
        product.quantity++;
      }
    },
    updateQuantity: (state, action) => {
      const value = action.payload.value
      const product = state.find((product) => product.sku === action.payload.sku);
      if (value <= product.stockLevel && value > 0) {
        product.quantity = value
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.find((product) => product.sku === action.payload);
      if (product.quantity === 1) {
        const index = state.findIndex((product) => product.sku === action.payload);
        state.splice(index, 1);
      } else {
        product.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((product) => product.sku === action.payload);
      state.splice(index, 1);
    },
    cleanCart: () => []
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  updateQuantity,
  decrementQuantity,
  removeFromCart,
  cleanCart
} = cartSlice.actions;
