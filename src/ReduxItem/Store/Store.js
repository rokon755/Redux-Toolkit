import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/counter/counterSlice';
import postsReducer from '../Features/posts/postsSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
});

export default store;
