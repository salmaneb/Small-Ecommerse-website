import React from "react";
import { Carousel, Container } from 'react-bootstrap'
function Slide(){
    return(<>
<Container fluid>
    <Carousel className="d-flex justify-content-center flex-center">
        <Carousel.Item>
            <img src="../ig.jpg" className="img-fluid rounded ms-5 me-5" width={900} />
            <Carousel.Caption>motor car</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="../ig.jpg" className="img-fluid rounded ms-5 me-5" width={900} />
            <Carousel.Caption>motor car</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img src="../ig.jpg" className="img-fluid rounded ms-5 me-5" width={900} />
            <Carousel.Caption>motor car</Carousel.Caption>
        </Carousel.Item>
    </Carousel>
</Container>
    </>);
}
export default Slide;