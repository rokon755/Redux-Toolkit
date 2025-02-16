import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/counter/counterSlice';
import postsReducer from '../Features/posts/postsSlice';
import TodoReducer from '../Features/Todos/todoSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
    todos: TodoReducer,
  },
});

export default store;
