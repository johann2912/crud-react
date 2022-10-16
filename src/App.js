import React from 'react';
import './App.css';

import User  from './components/User';
import UserForm  from './components/UserForm';

function App() {
  return (
    <div className='container p-4'>
      <div className='row'>

      </div>
      <UserForm /> 
      <User />
    </div>
  );
}

export default App;
