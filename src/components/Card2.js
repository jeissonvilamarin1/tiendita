import React, {useState} from 'react'
import { Card, Button, Container } from 'react-bootstrap';


export const Card2 = ({populares}) => {
  
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
    }

     
}
    return (
      <Container className="cardcontainer">
          {populares.map(p =>(
                <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.description}</Card.Title>
                    <Card.Text>
                    $ {p.price}/kg   ${p.prices}/kg
                    </Card.Text>
                    <Button id={p.description} onClick={(e)=>onSearchid(e)} style={{ backgroundColor: "rgb(230, 154, 12)"}} variant="primary">Agregar</Button>
                </Card.Body>
                </Card>
         
          ) )}
           
      </Container>
    
    );
}
