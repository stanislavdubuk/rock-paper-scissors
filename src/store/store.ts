import { configureStore } from '@reduxjs/toolkit';
import choiceReducer from '../store/gameSlice';

export const store = configureStore({
  reducer: {
    choice: choiceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
