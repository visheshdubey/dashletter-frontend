import React from 'react';
import './SignUpForm.css';
import {Container, Form, Button, ButtonGroup} from 'react-bootstrap';

const SignUp = () => (
        <React.Fragment>
            <Container className="containBlock">
            <h1>
                Welcome to Dashletter
            </h1>
            <Form className="formblock">
            <Form.Group  controlId="formBasicEmail">
                <Form.Control size="sm" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control size="sm" type="password" placeholder="Enter Password" />
            </Form.Group>
            <Form.Group controlId="ConfirmPassword">
                <Form.Control size="sm" type="password" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group controlId="Age">
                <Form.Control size="sm" type="number" placeholder="Enter your Age" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className="formend">
                <Form.Check type="checkbox" size="sm" label="Agree to the terms and conditions" />
            </Form.Group>
            <Button variant="danger" type="submit" block>
                Submit
            </Button>
        </Form>    
        <hr/>    
        <div className="d-flex flex-column">
        <ButtonGroup>
            <Button variant="danger" className="googlelogo">Login with Google+</Button>
            <Button className="fblogo">Login with Facebook</Button>
        </ButtonGroup>
        </div> 
    </Container>    
</React.Fragment>
        
)

export default SignUp;