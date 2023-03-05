import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import components
import Projects from './components/Projects/Projects';
import Blog from './components/Blog/Blog';
import App from './components/App';
import Nav from './components/Nav';
import Footer from './components/Footer';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
