import React  from 'react';
import "./App.css";

import RPHeader from './Components/Header/RPHeader';
import RPFooter from './Components/Footer/RPFooter';
import Main from './Components/Main/Main';
import Navigation from './Components/Navigation/Navigation';
import Sponsors from './Components/Main/Sponsors/Sponsors';
export default function App() {
  return (
    <div className='App'>
        <Navigation />
        <RPHeader />
        <div className="Main">
          <Main />
          <Sponsors/>
        </div>
        <RPFooter/> 
    </div>
  );
}