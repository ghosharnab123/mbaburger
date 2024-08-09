import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    cartItems: {
          cheeseBurger: {
            price: 200,
            quantity: 0,
          },
          vegCheeseBurger: {
            price: 500,
            quantity: 0,
          },
          burgerWithFries: {
            price: 800,
            quantity: 0,
          },
        },
    subTotal: 0,
    tax: 0,
    shippingCharges:  0,
    total:  0,
    shippingInfo:{},
  };

  export const cartReducer = createReducer(initialState, (builder) => {
    builder
      .addCase('cheeseBurgerIncrement', (state) => {
        state.cartItems.cheeseBurger.quantity += 1;
      })
      .addCase('vegCheeseBurgerIncrement', (state) => {
        state.cartItems.vegCheeseBurger.quantity += 1;
      })
      .addCase('burgerWithFriesIncrement', (state) => {
        state.cartItems.burgerWithFries.quantity += 1;
      })
      .addCase('cheeseBurgerDecrement', (state) => {
        state.cartItems.cheeseBurger.quantity -= 1;
      })
      .addCase('vegCheeseBurgerDecrement', (state) => {
        state.cartItems.vegCheeseBurger.quantity -= 1;
      })
      .addCase('burgerWithFriesDecrement', (state) => {
        state.cartItems.burgerWithFries.quantity -= 1;
      })
      .addCase('calculatePrice', (state) => {
        state.subTotal =
          state.cartItems.cheeseBurger.price *
            state.cartItems.cheeseBurger.quantity +
          state.cartItems.vegCheeseBurger.price *
            state.cartItems.vegCheeseBurger.quantity +
          state.cartItems.burgerWithFries.price *
            state.cartItems.burgerWithFries.quantity;
  
        state.tax = state.subTotal * 0.18;
        state.shippingCharges = state.subTotal > 1000 ? 0 : 200;
        state.total = state.subTotal + state.tax + state.shippingCharges;
      });
  });