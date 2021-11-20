import React from 'react'
import { Modal, Button } from "react-bootstrap";

export const ModalProduct = ({setShow, show, product, actual}) => {
    console.log(actual)
    console.log(product)
    const handleClose = () => setShow(false);
    let buscado = []
    buscado = product.find(p => p.id === Number(actual))
    console.log(buscado)
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
          <div className="containerProduct">
              <img src={actual.image} alt="" />
              <div className="product-info">
                <h1>{actual.description}</h1>
                <h2>{actual.price} /kg</h2>
                <p>Precios con IVA incluido</p>
                <p>
                  Peso aproximado por pieza, puede variar de acuerdo al peso
                  real
                </p>
              </div>
              <Button variant="success">Agregar</Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
