import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import App from './App';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='projects' element={<Projects />}/>
      <Route path='about' element={<About />}/>
      <Route path='contact' element={<Contact />}/>
    </Routes>
  </HashRouter>
);

