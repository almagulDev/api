import React from "react";
import scss from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/list">
            <p>List product</p>
          </Link>
          <Link to="/add">
            <p>Add product</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
