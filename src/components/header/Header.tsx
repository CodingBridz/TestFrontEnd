import React from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className={classes.header}>
      <ul>
        <li>
          <Link to={"/"}>Spell Lists</Link>
        </li>
        <li><Link to={"/favourites"}>Favourite Page</Link></li>
      </ul>
    </div>
  );
};


export default Header;
