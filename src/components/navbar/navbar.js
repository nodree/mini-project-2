import React from "react";
import SignIn from "./RightMenu";
import "../../style/navbar.scss";

const Logo = require("../../assets/logo_transparent.png");

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__Logo">
        <a href="/">
          <img src={Logo} alt="Logo"></img>
        </a>
      </div>
      <div className="Navbar__Search">
        <form>
          <input text="text" placeholder="search"></input>
        </form>
      </div>
      <div className="NavBar__Login">
        <SignIn />
      </div>
    </div>
  );
}

export default Navbar;
