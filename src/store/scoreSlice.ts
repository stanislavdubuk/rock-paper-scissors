import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { RootState } from './store';

interface GameState {
  score: number;
}

const initialState: GameState = {
  score: 0,
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    increment: (state) => {
      state.score = state.score + 1;
    },
    getLocalScore: (state) => {
      if (localStorage.getItem('scores') === null) {
        localStorage.setItem('scores', JSON.stringify([]));
      } else {
        let scoreLocal = JSON.parse(localStorage.getItem('scores')!);
        state.score = scoreLocal;
      }
    },
    setLocalScore: (state) => {
      localStorage.setItem('scores', JSON.stringify(state.score));
    },
  },
});

export const { increment, getLocalScore, setLocalScore } = scoreSlice.actions;

export default scoreSlice.reducer;
