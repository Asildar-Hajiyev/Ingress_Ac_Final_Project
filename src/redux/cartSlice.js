import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const storeInLocalStore = (data) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  itemCount: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addToCart: (state, action) => { 
      const isItemCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (isItemCart) {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return action.payload;
          } else {
            return item;
          }
        });
        state.carts = tempCart;
      } else { 
        state.carts.push(action.payload);
      }
      storeInLocalStore(state.carts);
    },
    quantityIncrement: (state, action) => {
      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity < 99 ? item.quantity + 1 : 99,
          };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStore(state.carts);
    },
    quantityDecrement: (state, action) => {
    

      const tempCart = state.carts.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
          };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStore(state.carts);
    },
    quantityOnChange: (state, action) => {
      const newQuantity = action.payload.quantity;

      const findCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (newQuantity <= 0 || newQuantity >= 100) {
        state.carts = state.carts.filter(
          (item) => findCart.id !== action.payload.id
        );
      } else {
        const tempCart = state.carts.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: newQuantity };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
      }
      storeInLocalStore(state.carts);
    },
    //tek-tek remove
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter((item) => item.id !== action.payload);
      state.carts = tempCart;
      storeInLocalStore(state.carts);
    },
    //carti obsi temizliyirik
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStore(state.carts);
    },
    //cartin obsi qiymetlerini hesablayirig total price
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
        return (cartTotal += cartItem.price * cartItem.quantity);
      }, 0);
      state.itemCount = state.carts.length;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  getCartTotal,
  quantityDecrement,
  quantityIncrement,
  quantityOnChange,
} = cartSlice.actions;
export default cartSlice.reducer;
