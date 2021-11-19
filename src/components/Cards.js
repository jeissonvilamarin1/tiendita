import React from 'react'
import { Card, Button, Container } from 'react-bootstrap';



export const Cards = ({productos}) => {
    return (
      <Container className="cardcontainer">
          {productos.map(p =>(
                <Card style={{ width: "18rem" }}>
                     <Card.Text className="cardtext1">
                    $ {p.descuento}dto. </Card.Text>
                <Card.Img variant="top" src={p.image} />
                <Card.Body>
                    <Card.Title>{p.description}</Card.Title>
                    <Card.Text>
                    $ {p.price}/kg   {p.prices}/kg
                    </Card.Text>
                    <Button style={{ backgroundColor: "rgb(230, 154, 12)"}} variant="primary">Agregar</Button>
                </Card.Body>
                </Card>
          ) )}
      </Container>
    );
}
