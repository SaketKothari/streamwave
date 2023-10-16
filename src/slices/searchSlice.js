import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      // Merge objects
      state = Object.assign(state, action.payload);

      // TODO: Use ES6
      // console.log('Reducer is called with action:', action);
      // state = { ...action.payload, ...state };
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
