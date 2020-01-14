import React from 'react';
import Modal from '../../UI/Modal/Modal';
import Toolbar from './IndexPageToolbar/Toolbar';
import Body from './IndexPageBody/Body';
import SignUpForm from '../SignUpForm/SignUpForm';

class IndexPage extends React.Component {
    state = {
        showModal : false
    }
    onClickHandler = () => {
        this.setState({showModal : true});
    }
    cancelModal = () => {
        this.setState({showModal : false});
    }
    render() {
        return(
            <React.Fragment>
                <Toolbar 
                    brand = 'Dashletter'
                    text = 'SignUp'
                    clicked = {this.onClickHandler}/>
                <Body className="mt-5"/>
                <Modal show={this.state.showModal} modalClosed={this.cancelModal}>
                    <SignUpForm />               
                </Modal> 
            </React.Fragment>
        );
    }
}

export default IndexPage;