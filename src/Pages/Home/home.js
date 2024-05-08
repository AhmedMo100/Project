import React from 'react';
import '../Home/home.css';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import Logo from '../../Images/logo-blue.png';
import HomeImage from '../../Images/Home-image.jpeg';



function Home() {
    return (
        <div className='home'>
            <Container>
                {/* Home Header */}
                <div className='header'>
                    <Navbar variant="dark" expand={false}>
                        <Container>
                            <Navbar.Brand href="/">
                                <img src={Logo} width="100" height="60" className="d-inline-block align-top" alt="Logo" />
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbar-collapse" />
                            <Navbar.Collapse id="navbar-collapse">
                                <Nav className="ms-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#about">Scans</Nav.Link>
                                    <Nav.Link href="#services">Reports</Nav.Link>
                                    <Nav.Link href="#contact">Patient</Nav.Link>
                                    <Nav.Link href="#contact">Services</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                {/* Home Content */}
                <div className='home-content'>
                    <Container className="my-4">
                        <Row>
                            <Col md={6} className='content'>
                                <h1>Acl Revive</h1>
                                <p>crucial step in regaining full knee function after an injury to this important ligament. The rehabilitation process typically consists of four phases:</p>
                                <Button href='/signup' variant="primary">Sign Up</Button>
                            </Col>
                            <Col md={6} className='image'>
                                <img src={HomeImage} alt="A description"/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default Home;
