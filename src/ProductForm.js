import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from './store';

const ProductForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [available, setAvailable] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (parseFloat(price) < 0) {
            alert("Цена не может быть отрицательной");
            return;
        }

        const newProduct = {
            id: Date.now(),
            name,
            description,
            price: parseFloat(price),
            available
        };
        dispatch(addProduct(newProduct));
        setName('');
        setDescription('');
        setPrice('');
        setAvailable(false);
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;
        // Разрешаем только цифры и точку
        if (/^\d*\.?\d*$/.test(value)) {
            setPrice(value);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Имя продукта" required />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Описание" required />
            <input
                type="text"
                value={price}
                onChange={handlePriceChange}
                placeholder="Цена"
                required
            />
            <label>
                Доступен:
                <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} />
            </label>
            <button type="submit">Добавить продукт</button>
        </form>
    );
};

export default ProductForm;