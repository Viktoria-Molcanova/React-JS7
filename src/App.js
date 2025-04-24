
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const App = () => {
  return (
      <Provider store={store}>
        <h1>Каталог продуктов</h1>
        <ProductForm />
        <ProductList />
      </Provider>
  );
};

export default App;