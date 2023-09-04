import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Product } from './models/product';
import { useDispatch } from 'react-redux';
import { addToCart } from './pages/CartPage/cartPageSlice';

const items: Product[] = [
  {
    id: 1,
    count: 1,
    name: 'Сосисочка',
    price: 220,
  },
  {
    id: 2,
    count: 1,
    name: 'Хлебушек',
    price: 50,
  },
  {
    id: 1,
    count: 1,
    name: 'Кетчуп',
    price: 80,
  },
];

export const App = () => {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />

      {items.map((item) => (
        <div key={`item-${item.id}`}>
          <div>{item.name}</div>
          <div>{item.price}</div>
          <button onClick={() => dispatch(addToCart(item))}>В корзину</button>
        </div>
      ))}

      <br />
      <hr />
      <br />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
