import React from 'react'
import { Container, Badge, Navbar, Button, Row, Col } from 'react-bootstrap';
import { BiCart } from "react-icons/bi";
import '../styles/principal.css';


export const NavBar = () => {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Container fluid className="navegar">
       
              <div className="textnav">
               <h2>Tiendita</h2>  
              </div>
              <div>   
              <button className="Buttonnav">              
              <BiCart style={{ width: "28px", height: "28px", }} />
                        <span>9</span></button>
              </div>
       
          </Container>
        </Navbar>
      </div>
    );
}
