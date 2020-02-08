import React from 'react';
import {Container} from 'react-bootstrap';
import Slider from '../../../UI/Slider/Slider';
import Recommended from './Recommended/Recommended';

const Body = () => {
    return(
        <Container fluid={true}>            
            <Slider />
            <br/>
            <Recommended/>
        </Container>
    );
}

export default Body;
