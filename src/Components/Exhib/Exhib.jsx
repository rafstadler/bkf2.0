import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, Navbar,Image} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';
import './Exhib.css';

import Carousel, { autoplayPlugin,slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";


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

                <Row>
                            <Col id="clothes">
                                <h1 className='exhib-h1-mobile d-sm-none' align='center'>BREAKFAST<h3>LEGACY</h3></h1>
                                <h1 className='exhib-h1 d-none d-sm-block' align='center'>BREAKFAST<h3>LEGACY</h3></h1>
                                 
                            </Col>
                        </Row>  
                        
                        <Row>
                            <Col sm={{ span: 8, offset: 2 }}><AnimatedOnScroll animationIn='fadeInUp' isVisible={true}>
                            
                            <div className='clothes-intro'>
                                
                            Breakfast Legacy est une <b className='exhib-b'>marque de vêtements </b> fondée en mai 2016. Elle rassemble les créations d’un collectif d'inspiration <b className='exhib-b'>urbaine</b> tout en étant <b className='exhib-b'>classe</b> à sa manière.
                            
                            C’est à travers des séries de pulls que le collectif a d'abord pu diffuser son image. À chaque soirée, tout membre se devait de porter le pull de la marque qui lui correspondait le mieux. 
                            <br/><br/>
                            Après avoir fait des pulls, des t-shirts et des casquettes sous diverses collections, Breakfast Legacy s’agrandit et a décidé de <b className='exhib-b'>créer ses propres vêtements...</b>

                                <br/>
                                <br/>
                                
                                Lien vers notre boutique en ligne :
                                <br/>
                                <br/>
                                
                                <a href="https://breakfastparis.bigcartel.com" target="_blank" className="shop-link">SHOP</a>
                                
                                </div>
                                </AnimatedOnScroll>
                            </Col>
                        
                        </Row>
                        
                        <Row className="visus-clothes">
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/pull_bkf_orange.png' fluid></Image>
                            </Col>
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/pull_bkf_rose.png' fluid></Image>
                            </Col>
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/pull_bkf_noir.png' fluid></Image>
                            </Col>
                            
                            <Col md={3}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/zipvert.png' fluid></Image>
                                </Col>
                                <Col md={3}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/zipnoir.png' fluid></Image>
                            </Col>
                                <Col md={3}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/zipblanc.png' fluid></Image>
                            </Col>
                            
                            <Col md={3}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/ziprouge.png' fluid></Image>
                            </Col>
                            
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/tee2rouge.png' fluid></Image>
                            </Col>
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/tee1.png' fluid></Image>
                            </Col>
                            <Col md={4}>
                                <Image className='visu-clothes' src='https://firstbkf.s3.us-east-2.amazonaws.com/tee2noir.png' fluid></Image>
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