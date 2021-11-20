import React, { useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { ModalProduct } from "./Modal";

export const Card2 = ({ populares }) => {
  const [show, setShow] = useState(false);
  const [actual, setActual] = useState([populares]);

  const handleShow = () => {
    setShow(true);
  };

  let buscado = [...populares];

  const handleClick = (e) => {
    e.preventDefault();
    buscado = e.target.id;
    setActual(buscado);
    return buscado;
  }

  const onSearchid = (e) => {
    console.log(e.target.id);
    const itemName=e.target.id;
    const Todos = populares.find(todo => todo.description===itemName);
    const localStorageItem = localStorage.getItem("items");
    let parsedItem=[];
    if (!!localStorageItem) {
       parsedItem = JSON.parse(localStorage.getItem("items"))
       parsedItem.push(Todos)
      localStorage.setItem("items", JSON.stringify(parsedItem));
      JSON.parse(localStorageItem)
      parsedItem =Todos;
    } else {
        parsedItem.push(Todos)
        localStorage.setItem("items", JSON.stringify(parsedItem));
    }}

  return (
    <Container className="cardcontainer">
      {populares.map((p) => (
        <Card
          style={{ width: "18rem" }}
          key={p.id}
          id={p.id}
          className="card"
          onClick={(e) => handleClick(e)}
        >
          <Card.Img variant="top" src={p.image} />
          <Card.Body>
            <Card.Title>{p.description}</Card.Title>
            <Card.Text>
              $ {p.price}/kg {p.prices}/kg
            </Card.Text>
            <Button
              style={{ backgroundColor: "rgb(230, 154, 12)" }}
              variant="primary" id={p.description} onClick={(e)=>onSearchid(e)}
            >
              Agregar
            </Button>
            <Button variant="primary" onClick={handleShow} id={p.id}>
              Detalle
            </Button>
          </Card.Body>
        </Card>
      ))}
      <ModalProduct
        setShow={setShow}
        show={show}
        product={populares}
        actual={actual}
      />
    </Container>
  );     
}
