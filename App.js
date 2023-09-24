import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.js';
import { Menu } from './Menu';
import { Home } from './Home';
import { Programs } from './Programs';
import { Contact } from './Contact';
import { Register } from './Register';
import { Login } from './Login';
import { Dashboard } from './Dashboard';
import { OwnerDasboard } from './OwnerDasboard';
import { Getsingle } from './GetSingle';
import { Update } from './Update';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={[<Menu/>,<Home/>]} />
    <Route path='/home' element={[<Menu/>,<Home/>]} />
    <Route path='/programs' element={[<Menu/>,<Programs/>]}/>
    <Route path='/contact' element={[<Menu/>,<Contact/>]}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard/:id' element={<Dashboard/>}/>
    <Route path='/ownerdashboard/:id' element={<OwnerDasboard/>}/>
    <Route path='/getsingle/:id' element={<Getsingle/>}/>
    <Route path='/update/:id' element={<Update/>}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
