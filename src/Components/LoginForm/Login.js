import React from 'react';
import {Button, Form, Container} from 'react-bootstrap';

const Login = () => (
    <React.Fragment>
        <Container className="containBlock">
            <h1>Dashletter</h1>
            <Form className="formblock">
                <Form.Group  controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button variant="danger" type="submit" block>
                    Login
                </Button>
            </Form>         
        </Container>      
    </React.Fragment>
)

export default Login;