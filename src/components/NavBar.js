import React from 'react'
import { Container, Nav, Navbar, Button, Row, Col } from 'react-bootstrap';

export const NavBar = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Row>
              <Col xs={10} md={8} xl={8}>
                <Navbar.Brand href="#home" bg="light">
                  Tiendita
                </Navbar.Brand>
              </Col>
              <Col xs={2} md={4} xl={4}>
                <Nav className="me-auto">
                  <Button variant="success">Carrito</Button>
                </Nav>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
}
