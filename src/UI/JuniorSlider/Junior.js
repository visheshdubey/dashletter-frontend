import React,{useState} from 'react';
import './Junior.scss';
import ImgCard from './ImgCard';
import Img1 from './pics/1.jpg';
import Img2 from './pics/2.jpg';
import Img3 from './pics/3.jpg';
import Img4 from './pics/4.jpg';
import Img5 from './pics/5.jpg';
import Img6 from './pics/6.jpg';
import {Container} from 'react-bootstrap';

function Junior () {
    //array of components to show inside Slider
    let slideArr = [
        <ImgCard src={Img1}
            data="Slide 1"/>,
        <ImgCard src={Img2}
            data="Slide 2"/>,
        <ImgCard src={Img3}
            data="Slide 3"/>,
        <ImgCard src={Img4}
            data="Slide 4"/>,
        <ImgCard src={Img5}
            data="Slide 5"/>,
        <ImgCard src={Img5}
            data="Slide 6"/>,
        <ImgCard src={Img6}
            data="Slide 7"/>,
        <ImgCard src={Img1}
            data="Slide 8"/>,
        <ImgCard src={Img2}
            data="Slide 9"/>,
        <ImgCard src={Img3}
            data="Slide 10"/>,
        <ImgCard src={Img6}
            data="Slide 11"/>,
        <ImgCard src={Img5}
            data="Slide 12"/>,
        <ImgCard src={Img4}
            data="Slide 13"/>];
    const [x,setX] = useState(0)
    const goLeft = () => {
        console.log(x);
        (x=== 0)?setX(-100*(slideArr.length - 5)):setX(x + 100);
    }
    const goRight = () => {
        console.log(x);
        (x=== -100*(slideArr.length - 5))?setX(0):setX(x - 100);
    }
    return(
        <Container fluid={true}>
            <div className="juniorslider">
        {slideArr.map((item, index) => {
            return(
            <div key={index} className="juniorslide" style={{transform:`translateX(${x}%)`}}>
                {item}
                
            </div>
            )
        })}
        <button id="Left" onClick={goLeft}><i className="fas fa-chevron-left"></i></button>
        <button id="Right" onClick={goRight}><i className="fas fa-chevron-right"></i></button>
        </div>
        </Container>      
    )
    
}

export default Junior;