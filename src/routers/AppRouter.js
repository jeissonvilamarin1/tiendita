import React from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/container/Container";
import { url } from "../helpers/urls";


export const AppRouter = () => {

    const getData = () =>{
        axios.get
    }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
