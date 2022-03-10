import logo from "./img//facebook_profile_image-removebg-preview.png";

import React from "react";

function NavBar() {
  return (
    <div className="">
      <nav className=" navbar fixed-top px-5 navBarpropio ">
        <a className="navbar-brand" href="/" style={{ color: "white" }}>
          HackFlix
          <img src={logo} className="shaker" alt="" style={{ width: "50px" }} />
        </a>
        <div>
          <a className="navbar-brand " href="/" style={{ color: "white" }}>
            Home
          </a>
          <a
            className="navbar-brand "
            href="/filterbytitle"
            style={{ color: "white" }}
          >
            Filter Title
          </a>
          <a
            className="navbar-brand "
            href="/filterbyrating"
            style={{ color: "white" }}
          >
            Filter Rating
          </a>
          <a
            className="navbar-brand "
            href="/Contact"
            style={{ color: "white" }}
          >
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
