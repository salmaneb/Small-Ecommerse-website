import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function SignIn(){
    let[email,setEmail]=useState('');
    let[password,setPassword]=useState('');
    let navigate=useNavigate();
    function sub(){
navigate('/');
    }
    return(
        <>
            <Form>
            <Form.Group>
            <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder="Enter Your Email" value={email} onChange={e=>setEmail(e.target.value)} />
            </Form.Group>
            <Form.Group>
            <Form.Label>Password</Form.Label>
                <Form.Control type='password' placeholder="Enter Your Password" value={password} onChange={e=>setPassword(e.target.value)} />
            </Form.Group>
            <Button type="submit" onClick={sub}>signIn</Button>
            </Form>
        </>
    );
}
export default SignIn