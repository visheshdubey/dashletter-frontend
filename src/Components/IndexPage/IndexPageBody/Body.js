import React from 'react';
import Img1 from '../../../Assets/1tile.png';
import Img2 from '../../../Assets/2tile.png';
import Img3 from '../../../Assets/3tile.png';
import Img4 from '../../../Assets/4tile.png';
import {Container, Row, Col} from 'react-bootstrap';
import BodyComponent from './Images/Images';
import {Content, Contents} from './Content/index';
import './Body.css';

const dark ={backgroundColor: '#f2f2f2'};

const body = (props) => (
<Container fluid={true}>
  <Row>
    <Col sm={8} className="largerBlock"><BodyComponent img = {Img1} /></Col>
    <Col sm={4} className="contentBlock"><Content link = "/user" exact/></Col>
  </Row>
  <Row style={dark}>
    <Col sm={6} className="contentBlock"><Contents title="One platform for all newsletters" bg='#f2f2f2'/></Col>
    <Col sm={6} className="block" ><BodyComponent img = {Img2} bg='#f2f2f2'/></Col>
  </Row>
  <Row>
    <Col sm={6} className="block"><BodyComponent img = {Img3} /></Col>
    <Col sm={6} className="contentBlock"><Contents title="We organize newsletter even better"/></Col>
  </Row>
  <Row style={dark}>
    <Col sm={6} className="contentBlock"><Contents title="Added security from spamming" bg='#f2f2f2'/></Col>
    <Col sm={6} className="block"><BodyComponent img = {Img4} bg='#f2f2f2' /></Col>
  </Row>
</Container>
);

export default body;