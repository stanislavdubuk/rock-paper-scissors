import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  userChoice: string;
  computerChoice: string;
  winner: string;
}

const initialState: GameState = {
  userChoice: '',
  computerChoice: '',
  winner: '',
};

export const choiceSlice = createSlice({
  name: 'choice',
  initialState,
  reducers: {
    userChoose: (state, action: PayloadAction<string>) => {
      state.userChoice = action.payload;
    },
    computerChoose: (state) => {
      let compChoice = Math.floor(Math.random() * 3);
      if (compChoice === 0) {
        state.computerChoice = 'rock';
      } else if (compChoice === 1) {
        state.computerChoice = 'paper';
      } else if (compChoice === 2) {
        state.computerChoice = 'scissors';
      }
    },
    compareChoices: (state) => {
      //Check for rock
      if (state.userChoice === 'rock') {
        if (state.computerChoice === 'paper') {
          state.winner = 'computer';
        } else if (state.computerChoice === 'scissors') {
          state.winner = 'user';
        }
      }

      //Check for paper
      if (state.userChoice === 'paper') {
        if (state.computerChoice === 'rock') {
          state.winner = 'user';
        } else {
          state.winner = 'computer';
        }
      }

      //Check for scissors
      if (state.userChoice === 'scissors') {
        if (state.computerChoice === 'paper') {
          state.winner = 'user';
        } else if (state.computerChoice === 'rock') {
          state.winner = 'computer';
        }
      }

      //Check for draw
      if (state.userChoice === state.computerChoice) {
        state.winner = 'draw';
      }
    },
    clear: (state) => {
      state.userChoice = '';
      state.computerChoice = '';
      state.winner = '';
    },
  },
});

export const { userChoose, computerChoose, compareChoices, clear } =
  choiceSlice.actions;

export default choiceSlice.reducer;
