import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import { Route, Routes } from 'react-router-dom';
import Piano from './components/Piano';

// type ConfigureEnhancersCallback = (
//   dafaultEnhancars: StoreEnhancer[]
// ) => StoreEnhancer[]

function App() {
  

  function entranceOnReducer() {}

  return (
    <div className="App">
      <Routes>
        <Route path='' element={<FirstPage/>} />
        <Route path='/piano' element={<Piano/>} />
      </Routes>
    </div>
  );
}

export default App;
