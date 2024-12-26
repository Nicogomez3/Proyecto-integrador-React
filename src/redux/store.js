import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './CategoriesSlice/CategoriesSlice';
import menuReducer from './MenuSlice/menuSlice';
import cartReducer from './CartSlice/cartSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCartReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: persistedCartReducer,
    menu: menuReducer,

  },
});

export const persistor = persistStore(store);