import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import App from './App';
import Contact from './Contact';
import Footer from './Footer';
import Nav from './Nav';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
export default function RouteSwitch(){
  return(
    <>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}