import React from 'react'
import { Container, Navbar, Button, Row, Col } from 'react-bootstrap';

export const NavBar = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container fluid>
            <Row>
              <Col xs={10} md={8} xl={8} lg={8}>
                Tiendita Edith
              </Col>
              <Col xs={2} md={4} xl={4} lg={4}>
                <Button variant="success">Carrito</Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
    );
}
