import React  from 'react';
import "./App.css";

import RPHeader from './Components/Header/RPHeader';
import RPFooter from './Components/Footer/RPFooter';
import Main from './Components/Main'
import Navigation from './Components/Navigation/Navigation';

export default function App() {
  return (
    <div className='App'>
        <Navigation />
        <RPHeader />
        <Main/>
        <RPFooter/> 
    </div>
  );
}