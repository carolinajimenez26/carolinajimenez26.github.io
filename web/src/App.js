import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import About from './components/About/About';
import CV from './components/CV/CV';
import Events from './components/Events/Events';
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
    "name": "Resumee",
    "href": "#cv",
  },
  {
    "name": "Events",
    "href": "#events",
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
      <CV />
      <Events />
      <Blog />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
