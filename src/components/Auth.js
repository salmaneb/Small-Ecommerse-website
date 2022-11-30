import React from "react";
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
function Auth(){
    let navigate=useNavigate();
    return(
        <>
    <Form>
        <Form.Control type="text" placeholder="Enter Name" style={{width:'200px'}} className='m-5' />
        <Form.Control type="passwor" placeholder="Enter Password" style={{width:'200px'}} className='m-5'/>
        <Button type="button" className="m-5" onClick={()=>navigate('/')}>login</Button>
    </Form>
        </>
    )
}
export default Auth;