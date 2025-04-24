import { configureStore, createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            state.push(action.payload);
        },
        removeProduct: (state, action) => {
            return state.filter(product => product.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.findIndex(product => product.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
        toggleAvailability: (state, action) => {
            const product = state.find(product => product.id === action.payload);
            if (product) {
                product.available = !product.available;
            }
        }
    }
});

export const { addProduct, removeProduct, updateProduct, toggleAvailability } = productsSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer
    }
});

export default store;