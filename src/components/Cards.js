import React, { useState } from 'react'
import { Card, Container, Button } from 'react-bootstrap';
import { ModalProduct } from './Modal';

export const Cards = ({productos}) => {
    const [show, setShow] = useState(false);
    const [actual, setActual] = useState([]);
    
    const handleShow = () => {
      setShow(true)
    };

    let buscado = [...productos];

    const handleClick = (e) =>{ 
      e.preventDefault()
      buscado=1;
      buscado = (e.target.id);
      setActual(buscado);
       return buscado;
    }

    console.log(buscado)
    return (
      <>
        <Container className="cardcontainer">
          {productos.map((p) => (
            <Card
              style={{ width: "200px" }}
              key={p.id}
              id={p.id}
              className="card"
              onClick={(e) => handleClick(e)}
            >
              <Card.Text className="cardtext1">$ {p.descuento}dto. </Card.Text>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.description}</Card.Title>
                <Card.Text>
                  $ {p.price}/kg {p.prices}/kg
                </Card.Text>
                <Button
                  style={{ backgroundColor: "rgb(230, 154, 12)" }}
                  variant="primary"
                >
                  Agregar
                </Button>
                <Button variant="primary" onClick={handleShow} id={p.id}>
                  Detalle
                </Button>

              </Card.Body>
            </Card>
          ))}
          <ModalProduct setShow={setShow} show={show} product={productos} actual={actual}/>
        </Container>
      </>
    );
}
