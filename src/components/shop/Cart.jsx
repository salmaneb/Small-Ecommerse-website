import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
function Cart(){
    return(
        <>
            <Container>
                <Row>
                    <Col md={4} className='text-center mt-5'>
<Card>
    <Card.Header>
        <Card.Title >Cart</Card.Title>
    </Card.Header>
    <Card.Body>
        <Card.Img src="./images/camera.jpg" />
        <Card.Text>$ 123</Card.Text>
        <Card.Text>Description: smart camera for capturing</Card.Text>
    </Card.Body>
</Card>
                    </Col>
                </Row>
            </Container>

        </>
    );
}
export default Cart;