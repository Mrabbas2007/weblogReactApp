import React from 'react';
import { Home } from './pages'
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className={`relative w-full h-auto `}>
      <Routes >
        <Route path={'/'} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
