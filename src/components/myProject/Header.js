import React from "react";
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
function Header(){
    return(<>
<Container fluid>
    <Navbar bg="success" expand='lg' >
        <Container>
        <Navbar.Brand className="fw-bold fs-2">Amazon</Navbar.Brand>
        <Nav>
            <Nav.Item>
                <Nav.Link href="#">cart</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="#">Brand</Nav.Link>
            </Nav.Item>
            <Form>
                <Form.Control type='text' className="me-3 mr-2" />
              
            </Form>
            <Button className="ms-2" >search</Button>
        </Nav>
        </Container>
        
    </Navbar>
</Container>
    </>)
}
export default Header;