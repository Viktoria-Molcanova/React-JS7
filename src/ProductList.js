import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, toggleAvailability } from './store';

const ProductList = () => {
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    return (
        <ul>
            {products.map(product => (
                <li key={product.id}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>Цена: {product.price} руб.</p>
                    <p>Доступен: {product.available ? 'Да' : 'Нет'}</p>
                    <button onClick={() => dispatch(removeProduct(product.id))}>Удалить</button>
                    <button onClick={() => dispatch(toggleAvailability(product.id))}>
                        {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
                    </button>
                </li>
            ))}
        </ul>
    );
};
export default ProductList;