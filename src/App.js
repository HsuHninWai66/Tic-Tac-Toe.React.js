import { useState } from 'react';
import User from './components/users/User';
import Square from './components/Tic-Tac-Toe/Square';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <>
      <Square></Square>
    </>
  )
}

export default App;