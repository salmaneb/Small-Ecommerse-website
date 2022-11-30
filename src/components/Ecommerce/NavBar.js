import React from "react";
import { Container, Nav, Navbar } from 'react-bootstrap';
import LocalMallIcon from '@mui/icons-material/LocalMall';
function NavBar(){
    return(
        <Navbar bg="light" expand='lg' variant="light" className="a">
            <Container fluid>
                <Navbar.Brand href="/">Ecommerce</Navbar.Brand>
                <Nav>
                    <Nav.Link href="/cart"><LocalMallIcon /></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavBar;