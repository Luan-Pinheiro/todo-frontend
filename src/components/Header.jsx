import React from "react";
import "../styles/Header.css";

const Header = ({ children }) => {
  return <h1 className="my-tasks-header">{children}</h1>;
};

export default Header;
