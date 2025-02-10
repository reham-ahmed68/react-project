import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';  // تأكد من المسار الصحيح للـ reducer

const store = configureStore({
  reducer: {
    cart: cartReducer,  // التأكد من أن cartReducer معرف بشكل صحيح
  },
});

export default store;
