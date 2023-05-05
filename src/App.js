
import './App.css';
import React from 'react';
import FormInput from './Components/FormInput';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import InfoInput from './InfoComponent/InfoInput';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<FormInput />} />
        <Route path="/info" exact element={<InfoInput />} />
      </Routes>
    </BrowserRouter>
      {/* <FormInput /> */}
    </div>
  );
}

export default App;
