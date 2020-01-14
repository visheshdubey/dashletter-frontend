import React from 'react';
// import {Link} from 'react-router-dom';
import {Navbar, Nav, InputGroup, FormControl, Button} from 'react-bootstrap';

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
                <Nav>
                <Nav.Link href="#home" className="mr-4">Blog</Nav.Link>
                {/* <Nav.Link href="#link" className="mr-4">Login</Nav.Link> */}
              </Nav>
              <Button 
                color = "#5581FF"
                onClick={this.props.clicked} >{this.props.text}</Button>
            </Navbar.Collapse>
            </Navbar>
        );
    }
} 

export default Toolbar;