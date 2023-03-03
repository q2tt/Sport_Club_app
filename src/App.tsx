import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route ,Routes } from 'react-router-dom';
import { AppRoutes } from './components/consts/routes';
import AboutUs from './components/AboutUs';
import CalorieCalculator from './components/CalorieCalculator';
import OurTeam from './components/OurTeam';
import Events from './components/Events';
import HomePage from './components/HomePage/';

function App() {
  return (
    <div className="App">
     <Navbar />
      <Routes>
         <Route path={AppRoutes.HomePage} element={<HomePage  />} />
          <Route path={AppRoutes.AboutUs} element={<AboutUs  />} />
          <Route path={AppRoutes.Events} element={<Events  />} />
          <Route path={AppRoutes.OurTeam} element={<OurTeam />} />

          <Route  path={AppRoutes.CalorieCalculator} element={<CalorieCalculator />} />
          
        </Routes>
    </div>
  );
}

export default App;
