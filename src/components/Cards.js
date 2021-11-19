import React, { useState } from 'react'
import { Card, Button, Container } from 'react-bootstrap';
import { ModalProduct } from './Modal';


export const Cards = ({productos}) => {
    const [modalShow, setModalShow] = useState(false);


    return (
      <>
        <Container>
          {productos.map((p) => (
            <Card
              style={{ width: "18rem" }}
              key={p.id}
              id={p.id}
              onClick={() => setModalShow(true)}
            >
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.description}</Card.Title>
                <Card.Text>
                  $ {p.price}/kg {p.prices}/kg
                </Card.Text>
                <Button variant="primary">Agregar</Button>
                <ModalProduct
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                />
              </Card.Body>
            </Card>
          ))}
        </Container>
      </>
    );
}
