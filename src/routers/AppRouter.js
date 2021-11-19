import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/container/Container";
import { url } from "../helpers/urls";
import { ModalProduct } from "../components/Modal";

export const AppRouter = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = () =>{
        axios.get(url)
             .then((response) => setProductos(response.data))
             .catch((error) => console.log(error))
    }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Container productos={productos}/>} />
          <Route path="/producto/:id" element={<ModalProduct productos={productos}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
