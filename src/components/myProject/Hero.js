import React from "react";
import { Col, Container, Row } from "react-bootstrap";
function Hero(){
    return(
        <>
            <Container fluid className="">
                <Row>
                    <Col md={3} className='fs-1 fw-italic mt-5'>
                        <h3>new brand</h3>
                        <span>i have new products avialibe</span>
                        <span>with very low price</span>
                    </Col>
                    <Col md={6} className='d-flex flex-center mt-5 align-center'>
                        <img src="../favicon.ico" />
                    </Col>
                    <Col md={3} className='mt-5 align-items-center fw-bold '>
                        <p>mobile</p>
                        <p>speaker</p>
                        <p>cream</p>
                        <p>shampo</p>
                        <p>watch</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Hero;