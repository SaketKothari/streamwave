import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from '../utils/constants';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      if (state.messages.length >= LIVE_CHAT_COUNT) {
        // If the number of messages exceeds or is equal to LIVE_CHAT_COUNT,
        // remove the oldest message.
        state.messages.shift();
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
