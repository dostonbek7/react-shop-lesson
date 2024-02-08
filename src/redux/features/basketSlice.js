import { createSlice } from "@reduxjs/toolkit";
import products from "../../data";

const initialState = {
  products,
  amount: 0,
  price: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    plus: (state, { payload }) => {
      const item = state.products.find((product) => product.id === payload);
      item.amount += 1
    },
    minus: (state, { payload }) => {
      const item = state.products.find((product) => product.id === payload);
      item.amount -= 1
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((product)=> product.id !== payload)
    },
    total:(state, {payload})=>{
      let allAmout = 0
       state.products.forEach(product=>{
        allAmout += product.amount
       })
       state.amount = allAmout
    }
  },
});

export const { plus, minus, removeItem, total } = basketSlice.actions;
export default basketSlice.reducer;
