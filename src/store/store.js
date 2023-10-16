import { configureStore } from '@reduxjs/toolkit';

import chatSlice from '../slices/chatSlice.js';
import searchSlice from '../slices/searchSlice';

const store = configureStore({
  reducer: {
    chat: chatSlice,
    search: searchSlice,
  },
});

export default store;
