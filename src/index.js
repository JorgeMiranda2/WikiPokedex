import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './views/homePage/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './index.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <BrowserRouter>
     <Routes>
       <Route path="/" component={HomePage}/>
  
     </Routes>
   </BrowserRouter>
   <HomePage/>  
   </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
