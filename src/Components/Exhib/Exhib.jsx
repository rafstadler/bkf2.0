import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, Navbar,Image} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Exhib.css';

class Exhib extends Component {

    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }

    render() {
        return (
            <div className='page'>
                <div className='exhib'></div>
                <div className='exhib-central'></div>

                <Container fluid align='center'>
                    <Row className='soon-div'>

                        <Col  xs={{span:1,offset:0}} md={{span:2,offset:2}}>
                            <div className='soon' >

                                <h1 className='exhib-h1-soon d-none d-sm-block' align='center'>SCHEDULED</h1>
                                <h1 className='exhib-h1-soon-mobile d-sm-none' align='center'>SCHEDULED</h1>

                            </div>

                        </Col>
                        <Col xs={{span:6,offset:4}} md={{span:7,offset:1}} className='my-auto'>
                            <div className='exhib-description-soon'>
                                dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2019</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2019</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>

                            <Carousel showArrows={true} className='exhib-carousel'>
                            

                                    {/* 
                                        <div>
                                        <video autoplay="autoplay" loop="loop" muted className="video">
                                            <source src={require('../../img/acceuilbq.mp4')} type="video/mp4"/>
                                        </video>
                                        </div>
                                    */}

                              
                                <div>
                                    <img src={require('../../img/nuage.png')} />      
                                </div>
                                <div>
                                    <img src={require('../../img/nuage.png')} />               
                                </div>
                                <div>
                                    <img src={require('../../img/nuage.png')} />                        
                                </div>
                                <div>
                                    <img src={require('../../img/nuage.png')} />         
                                </div>
                                <div>
                                    <img src={require('../../img/nuage.png')} />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2018</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2018</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2017</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2017</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2016</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2016</h1>
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                        </Col>
                    </Row>


                </Container>
            </div>

        );
    }
}

export default Exhib;