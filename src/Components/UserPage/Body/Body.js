import React from 'react';
import {Container} from 'react-bootstrap';
import Slider from '../../../UI/Slider/Slider';
//import ControlledCarousel from '../../../UI/Carousel/Carousel';

const Body = () => {
    return(
        <Container fluid={true}>            
            <Slider />
            <br/>
            {/* <ControlledCarousel/> */}
        </Container>
    );
}

export default Body;