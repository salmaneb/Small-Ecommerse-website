import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
function NavBar(){
    return(
        <>
            <Navbar bg='light' variant='lg' expand='lg'>
                <Container fluid>
<Navbar.Brand href="/">Learning</Navbar.Brand>
<Nav>
    <Nav.Link href="/signin">SignIn</Nav.Link>
    <Nav.Link href="/register">Register</Nav.Link>
</Nav>
                </Container>
            </Navbar>
        </>
    );
}
export default NavBar;