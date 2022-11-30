import React from "react";
import { Accordion, Container } from 'react-bootstrap';
function Work(){
    <>
    <Container>
        <Accordion defaultActiveKey='0'>
            <Accordion.Item eventKey="0">
                <Accordion.Header>
                    Mern Stack
                </Accordion.Header>
                <Accordion.Body>
                    <p>
                    A footer is an additional navigation component. 
                    It can hold links, buttons, company info, copyrights,
                 forms, and many other elements.
                    </p>

                </Accordion.Body>
                
            </Accordion.Item>
        </Accordion>
    </Container>
    </>
}
export default Work;