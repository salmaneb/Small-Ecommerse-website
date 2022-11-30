import React, { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
function Detail(){
    const {id}=useParams();
    let{product}=useSelector(state =>state.productSlice)
    let dispatch=useDispatch();
    useEffect(()=>{
        dispatch({type:'PRODUCT',id})
    },[id])
    return(
        <>
<Container>
    <Row>
        <Col md={6}>
            <Image src="../images/category-3.jpg"/>
        </Col>
    </Row>
</Container>
        </>
    );
}
export default Detail;