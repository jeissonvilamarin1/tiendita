import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { Container } from "../components/container/Container";
import { url } from "../helpers/urls";
import { url2 } from "../helpers/urls";


export const AppRouter = () => {

    const [productos, setProductos] = useState([]);
    const [populares, setPopulares] = useState([]);

    useEffect(() => {
        getData()
        getData2()
    }, [])

    const getData = () =>{
        axios.get(url)
             .then((response) => setProductos(response.data))
             .catch((error) => console.log(error))
    }
    const getData2 = () =>{
      axios.get(url2)
           .then((response) => setPopulares(response.data))
           .catch((error) => console.log(error))
  }
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Container productos={productos} populares={populares}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
