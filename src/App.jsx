import { useState } from 'react';
import './App.css';
import Boxes from './components/Boxes';
import Assests from './components/Assests';

function App() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Boxes />
      <Assests />
    </main>
  );
}

export default App;
