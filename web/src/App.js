import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

const navElems = [
  {
    "name": "Home",
    "href": "#",
  },
  {
    "name": "About",
    "href": "#about",
  },
  {
    "name": "Blog",
    "href": "#blog",
  },
  {
    "name": "Projects",
    "href": "#projects",
  },
  {
    "name": "Contact",
    "href": "#contact",
  },
];

function App() {
  return (
    <div className="App">
      <Navbar navElems={navElems} />
      <Header navElems={navElems} />
    </div>
  );
}

export default App;
