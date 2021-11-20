import React from 'react'
import { Container, Badge, Navbar, Button, Row, Col } from 'react-bootstrap';
import { BiCart } from "react-icons/bi";
import '../styles/principal.css';
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container fluid className="navegar">
       
              <div className="textnav">
              <Link to={`/`}>  <h2>Tiendita</h2>  </Link>  
              </div>
              <div> 
              <Link to={`/carrito`}>
              <button className="Buttonnav">              
              <BiCart style={{ width: "28px", height: "28px", }} />
                        <span>9</span></button></Link>  
              </div>
       
          </Container>
        </Navbar>
      </div>
    );
}
