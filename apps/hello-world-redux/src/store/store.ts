// src/store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state type
interface CounterState {
  value: number;
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
};

// Create a slice for the counter with reducers
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export the actions
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Configure and create the Redux store with the counter reducer
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,  // Register the counter slice reducer
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
