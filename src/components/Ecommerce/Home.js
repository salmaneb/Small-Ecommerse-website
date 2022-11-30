import React from "react";
import Haeder from "./Haeder";
import { Col, Container, Image, Row } from "react-bootstrap";
import {useSelector} from 'react-redux'
import { Link } from "react-router-dom";
function Home(){
    let {products} =useSelector(state => state.productSlice);
    return(
        <>
            <Haeder />
<Container>
    <Row>
    {products.map(product=>(
                <Col md={3}>
                <div className="img1">
                <Link to='/detail'>
                <Image src='../images/category-3.jpg' className="img-fluid"/>
                </Link>
                
                </div>
                <div className="text-center bg-primary mt-1">
                    Name :{product.name}
                </div>
                   <div className="text-center bg-primary mt-1">Price :{product.price}</div>
                   <div className="text-center bg-primary mt-1">Discount{product.discount}</div>
                    
                </Col>
                
                ))}
    </Row>
</Container>
        </>
    );
}
export default Home;