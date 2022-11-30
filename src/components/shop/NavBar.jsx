import React from "react";
import {Container, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavBar(){
    return(
        <>
            <Navbar bg='dark' variant='dark'>
                <Container >
                    
                        <Navbar.Brand href="/" className="fw-bold fs-2">Online Shopping</Navbar.Brand>
                    
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;