import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // إضافة المنتج إلى السلة بدون التحقق من وجوده مسبقًا
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      // إزالة المنتج من السلة بناءً على المعرف
      return state.filter((item) => item.id !== action.payload);
    }
  }
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
