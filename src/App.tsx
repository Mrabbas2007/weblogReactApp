import React from 'react';
import { Home, Register, ArticlesPage } from './pages'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';

function App() {
  return (
    <div className={`relative w-full h-auto `}>
      <Header />
      <main>
        <Routes >
          <Route path={'/'} element={<Home />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/articles'} element={<ArticlesPage />} />
          <Route path={'*'} element={<h1>Not Found pafe 404 !</h1>} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
