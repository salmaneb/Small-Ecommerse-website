import react from 'react';
import { Button, Col, Container, Image, Nav, Navbar, Row } from 'react-bootstrap';
import './App.css'
function App(){
 
  return(
    <>
    <Container className='app'>
     <Navbar bg='light' variant='light' expand='lg'>
      <Container >
<Navbar.Brand href='#'>Online Shop</Navbar.Brand>
<Nav className=''>
  <Nav.Link href='#'>userProfile</Nav.Link>
  <Nav.Link href='#'>signIn</Nav.Link>
</Nav>
      </Container>
     </Navbar>
     <Image src='./images/exclusive.png' className='img-fluid mt-5 offset-4 rounded w-25' />
     </Container>
     <Container className='mt-5' style={{height:'100vh'}} >
      <Row>
      <h3 className='text-center'>Latest Products</h3>
      <hr className='bg-dark ml-5 mr-5' />
        <Col md={4}>
          <Image src='./images/category-2.jpg' className='img-fluid'/>
        </Col>
        <Col md={4}>
          <Image src='./images/category-3.jpg' className='img-fluid'/>
        </Col>
        <Col md={4}>
          <Image src='./images/category-1.jpg' className='img-fluid'/>
        </Col>
      </Row>
     </Container>
     <Container style={{height:'100vh'}}>
      <Row>
      <h3 className='text-center'>Product Detail</h3>
        <Col md={6} className='mt-2'>
          <Image src='./images/category-1.jpg' className='img-fluid ' style={{width:'500px'}}/>
        </Col>
        <Col md={6} className='mt-2'>
         <div className='offset-2'>
         <h2 >Smart Shoes</h2>
         <h3>Price $100</h3>
         <h3>Discount 3%</h3>
         <h3>Quantity 10</h3>
         <p>Decription: lorium some one good for us</p>
         <Button>Add To Cart</Button>
         </div>
        </Col>
      </Row>
     </Container>
     <footer className='footer'>
      <Row>
        <Col md={4} className='mt-5 '>
        <div className='p-3'>
        <p>Facebook</p>
          <p>Youtube</p>
          <p>Instagram</p>
        </div>
        </Col>
        <Col className='mt-5'>
<div  className='p-3'>
<p>Web Developer Salman Ghani</p>
<p>salmandaggar290@gmail.com</p>
<p>contact 03449057275</p>
</div>
        </Col>
        <Col className='mt-5'>
<div  className='p-3'>
<p>http://github.com</p>
<p>http://likdlen.com</p>
<p>http://indeed.com</p>
</div>
        </Col>
      </Row>
     </footer>
    </>
  );

}
export default App;