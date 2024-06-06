import React from 'react';
import { Route,Routes } from 'react-router-dom'; 
import Home from './Components/Home';
import Contacts from './Components/Contacts';
import Notfound from './Components/Notfound';
import Navlinks from './Components/Navlinks';
import RegistrationForm from './Components/RegistrationForm'
import './App.css';

function App() {
  return (
    <div>
      <Navlinks />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/form' element={<RegistrationForm/>}/>
        <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>

  )
}

export default App