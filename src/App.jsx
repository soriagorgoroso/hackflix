import "./App.css";
import "./components/header.css";
import "./components/movie.css";
import Home from "./components/pages/Home";
import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";
import FilterByTitle from "./components/pages/FilterByTitle";
import FilterByRating from "./components/pages/FilterByRating";
import Contact from "./components/pages/Contact";
import Page404 from "./components/pages/Page404";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/filterbyrating" element={<FilterByRating />} />
        <Route path="/filterbytitle" element={<FilterByTitle />} />
      </Routes>
    </>
  );
}

export default App;
