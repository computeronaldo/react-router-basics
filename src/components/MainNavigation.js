import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
