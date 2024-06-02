import React from 'react';
import PasswordValidator from './components/PasswordValidator/PasswordValidator';
import './App.css';

const App = () => {
  const requirements = ['special', 'number', 'uppercase', 'noConsecutive'];
  return (
    <div className='App'>
      <h1>Password Component</h1>
      <PasswordValidator requirements={requirements} />
    </div>
  );
};

export default App;
