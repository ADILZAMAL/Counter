import React, { Component } from "react";

const Navbar = ({ totalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-bill badge-secondary">{totalCounter}</span>
      </a>
    </nav>
  );
};

export default Navbar;
