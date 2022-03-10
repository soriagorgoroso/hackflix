import React from "react";
import fondo from "./img/3690.jpg";

function Header({ title, setTitle }) {
  return (
    <>
      <header
        className="App-header "
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          paddingRight: "55px",
        }}
      >
        <div className="m-3 pt-5">
          <div className="logoNetflix ">
            <h2>
              <span className="spanNetflix">H</span>
              <span className="spanNetflix">a</span>
              <span className="spanNetflix">c</span>
              <span className="spanNetflix">k</span>
              <span className="spanNetflix">f</span>
              <span className="spanNetflix">l</span>
              <span className="spanNetflix">i</span>
              <span className="spanNetflix">x</span>
            </h2>
          </div>

          <h1 className="titulo">Your favorite movies!</h1>
          <h4 className=" lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h4>
        </div>
      </header>
    </>
  );
}

export default Header;
