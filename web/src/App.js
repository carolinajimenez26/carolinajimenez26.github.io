import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

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
      <About photo="./images/cjg.jpg" />
      <Blog />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
