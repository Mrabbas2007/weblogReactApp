import React from 'react';
import { Home, Register } from './pages'
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={`relative w-full h-auto `}>
      <Routes >
        <Route path={'/'} element={<Home />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={'*'} element={<h1>Not Found pafe 404 !</h1>} />
      </Routes>
    </div>
  );
}

export default App;
