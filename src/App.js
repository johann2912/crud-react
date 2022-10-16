import React from 'react';
import './App.css';

import User  from './components/User';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className='container p-4'>
      <div className='row'>
        <User />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
