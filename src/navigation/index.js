import {Link, useParams, useLocation} from "react-router-dom";
import "./index.css";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import home from "../home";

function Navigation() {
    const links = ["home", "log in", "sign up", "search", "profile"];
    const {pathname} = useLocation();

    return (
        // <div className="list-group edits nav-works">
        //     {links.map((link, index) => (
        //         <Link
        //             key={index}
        //             to={`/FoodPilot/${link}`}
        //             className={`list-group-item ${pathname.includes(link) && "active"}`}>
        //             <div className="wd-itemText">{link}</div>
        //         </Link>
        //     ))}
        // </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-edit ">
        <a className="navbar-brand logo-edits" href="#">FoodPilot</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/#/FoodPilot/about">About</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link cr-co" href="http://localhost:3000/#/FoodPilot/home">Home </a>
            </li>

            <li className="nav-item active">
              <a className="nav-link cr-co" href="#">Search </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Log In</a>
            </li>


            <li className="nav-item">
              <a className="nav-link" href="#">Sign Up</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Profile</a>
            </li>
          </ul>

         
        </div>
      </nav>
    );
}

export default Navigation;