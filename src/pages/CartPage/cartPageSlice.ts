import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';
import { Product } from '../../models/product';
import { RootState } from '../../store/store';

interface CartPage {
  items: Product[];
  items2: Map<number, Product & { quantity: number }>;
  minPrice: number;
  maxPrice: number;
}

const initialState: CartPage = {
  items: [],
  items2: new Map<number, Product & { quantity: number }>([
    [
      1,
      {
        id: 1,
        count: 1,
        name: 'Кетчуп',
        price: 80,
        quantity: 1,
      },
    ],
  ]),
  minPrice: 0,
  maxPrice: 100000,
};

const cartPageSlice = createSlice({
  name: 'cartPage',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
    changeCount: (state, action: PayloadAction<{ id: number; isMore: boolean }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.count = action.payload.isMore ? item.count + 1 : item.count - 1;
      }
    },
  },
});

export const { addToCart } = cartPageSlice.actions;

export const selectCartItems = (state: RootState) => state.cartPage.items;
export const selectCartItemsCount = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.count;
  }, 0);
export const selectCartItemsSum = (state: RootState) =>
  state.cartPage.items.reduce((acc, current) => {
    return acc + current.price;
  }, 0);

export const cartPageReducer = cartPageSlice.reducer;
