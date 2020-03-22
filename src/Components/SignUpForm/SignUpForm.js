import React from 'react';
import './SignUpForm.css';
import {Container, Button, ButtonGroup} from 'react-bootstrap';
import Axios from 'axios';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        let loggedIn = false
        this.state = {
            email: '',
            password: '',
            error: '',
            loggedIn
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        const {email, password} = this.state
        try {
            const token = Axios.post('https://dashletter-backend.herokuapp.com/signup', {email,password})
            localStorage.setItem("token", token)
            this.setState({
                loggedIn: true
            })
        } catch (err) {
            this.setState({
                error: err.message
            })
        }
    }
    render() {
        return(
            <div>
            <h1><b>Welcome to Dashletter</b></h1>
            <Container>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label forhtml="email">Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} id="email"/>
                </div>
                <div className="form-group">
                    <label forhtml="pwd">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label forhtml="pwd">Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password" onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-danger btn-block">Submit</button>
            </form> 
            <hr/>    
            <div className="d-flex flex-column">
            <ButtonGroup>
                <Button variant="danger" className="googlelogo">Login with Google+</Button>
                <Button className="fblogo">Login with Facebook</Button>
            </ButtonGroup>
            </div> 
        </Container>  
        </div>  
        );
    }
}
        
export default SignUp;