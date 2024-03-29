import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface CounterState {
  count: number;
  isRedy: boolean;
}

const initialState: CounterState = {
  count: 0,
  isRedy: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if(action.payload < 0) action.payload = 0
      state.count = action.payload;
    },
    initCounterState(state, action: PayloadAction<number>) {
      if (state.isRedy) return;
      state.count = action.payload;
      state.isRedy = true;
    }
  }
});

export const {
  addOne,
  substractOne,
  resetCount,
  initCounterState,
} = counterSlice.actions

export default counterSlice.reducer