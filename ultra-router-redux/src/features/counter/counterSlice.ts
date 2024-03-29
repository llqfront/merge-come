import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 5
  },
  reducers: {
    increment: state => {
      // Redux Toolkit 允许我们在 reducers 写 "可变" 逻辑。它
      // 并不是真正的改变状态值，因为它使用了 Immer 库
      // 可以检测到“草稿状态“ 的变化并且基于这些变化生产全新的
      // 不可变的状态
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
    // test: (state, action) => {
      state.value += action.payload
    }
  }
})
// 每个 case reducer 函数会生成对应的 Action creators
// export const { increment, decrement, incrementByAmount } = counterSlice.actions
/**
 * The incrementByAmount name can be changed to any name, it is not the name that is used to get the final value
 * export const { increment, decrement, test } = counterSlice.actions
 * PayloadAction<T> is required, or the final value can be obtained by PayloadAction<T>
 */

export default counterSlice
