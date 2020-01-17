import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, InputGroup, FormControl} from 'react-bootstrap';

class Toolbar extends React.Component {
    render() {
        return(
            <Navbar sticky="top" expand="lg" style={{backgroundColor: 'rgba(255,255,255,1)'}}>
                <Navbar.Brand href="#home" className="ml-4 mr-5 my-auto" as="h1">Dashletter</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <InputGroup className="mx-5" size="sm">
                        <FormControl
                            placeholder="Search"
                            style={{backgroundColor: '#f2f2f2'}}/>
                    </InputGroup>
                    <Nav className="ml-5">
                        <Link to ="/"><Nav.Link href="#home" className="mr-4">Home</Nav.Link></Link>
                        <Nav.Link href="#link" className="mr-4">Notifications</Nav.Link>
                        <Nav.Link href="#link" className="mr-4">{this.props.userName}</Nav.Link>
                    </Nav>  
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

export default Toolbar;
