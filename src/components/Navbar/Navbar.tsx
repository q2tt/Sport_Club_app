import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../consts/routes";

function Navbar() {
    return (
      <nav >
        <Link to={AppRoutes.AboutUs} >
        About Us
        </Link>
        <Link to={AppRoutes.CalorieCalculator} >
        Calorie Calculator
        </Link>
        <Link to={AppRoutes.Events} >
        Events
        </Link>
        <Link to={AppRoutes.OurTeam} >
        Our team
        </Link>
      </nav>
      
    );
  }
  export default Navbar;