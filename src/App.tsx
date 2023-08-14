import React from 'react';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}
