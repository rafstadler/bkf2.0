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
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>EXHIBITIONS</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>EXHIBITIONS</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={{ span: 8, offset: 2 }}><AnimatedOnScroll animationIn='fadeInUp' isVisible={true}>

                            <div className='exhib-intro'>
                                &nbsp;&nbsp;&nbsp;Les expositions Breakfast ont pour but d’attirer la jeunesse dans nos évènements et de leur offrir notre vision de l’art urbain. Le but du projet étant de montrer qu’il n’y a pas de limite à la création et que chacun peut créer autant qu’il le souhaite. Que cette création soit l’essence même de l’Homme car elle permet de laisser une trace dans l’histoire. C’est ce que nous souhaitons : laisser une trace dans l’histoire en partageant notre univers aux autres. 
                            </div>
                            </AnimatedOnScroll></Col>

                    </Row>

                    <Row className='soon-div align-items-center'>

                        <Col  xs={{span:1,offset:0}} md={{span:2,offset:1}}>
                            <div className='soon' >

                                <h1 className='exhib-h1-soon d-none d-sm-block' align='center'>À VENIR</h1>
                                <h1 className='exhib-h1-soon-mobile d-sm-none' align='center'>À VENIR</h1>

                            </div>

                        </Col>
                        <Col xs={{span:9,offset:2}} md={{span:7,offset:0}} className='my-auto'>
                            <AnimatedOnScroll className='exhib-description-soon' animationIn='fadeInUp' isVisible={true}>

                                La Breakfast Exhibition, organisée par ce groupe d’amis dont la plupart sont des étudiants de l’INSEEC BS Paris, consiste à vous faire découvrir cette atmosphère en mélangeant leurs peintures, leurs musiques et leur marque de vêtements à l’aide de la promotion de ses différents produits, tout cela dans une salle décorée afin qu’elle reflète au mieux leur univers.<br></br>
                                Notre prochain projet serait de mettre en place une exposition (voir aussi un défilé) dans la mairie du 10ème arrondissement de Paris. Pourquoi ne pas mélanger notre univers aux peintures déstructurées avec un lieu qui, au contraire, resplendit par son architecture si bien établie ? Ce projet est en cours…….


                            </AnimatedOnScroll>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2020</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2020</h1>
                        </Col>
                    </Row>

                    <Row className="expo align-items-center">
                        
                        
                        <Col className='exhib-description' md={{ span: 4, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <h2 className='exhib-h2'>- Breakfast Exhibition -</h2>
                                    <h2 className='exhib-h2'>- Le Point Éphémère Paris  06/01 -</h2>
                                    <div className='exhib-oeuvre'>
                                        Le Lundi 06 Janvier a eu lieu la Breakfast Exhibition Part.2 dans ce lieu mythique qu’est le Point Éphémère (200 quai de Valmy 75010). Cette exposition, rassemblant les artistes du collectif créatif Breakfast Paris ainsi que Wate en invité, a eu pour but de dévoiler les nouveaux travaux de ces artistes tout en restant fidèle à l’atmosphère de ce collectif.
                                    </div>

                                </div>
                            </AnimatedOnScroll>
                        </Col>
                        <Col md={6}>

                            <Carousel slidesPerPage={1} centered infinite autoPlay={6000}
  animationSpeed={1500}>
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/2018affiche.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20181.JPG' /> 
                                {isBrowser ? <video autoplay="autoplay" loop="loop" muted className="exhib-carousel-img-portrait">
                                    <source src='https://firstbkf.s3.us-east-2.amazonaws.com/2018video.mp4' type="video/mp4"/>
                                </video> : null}
                                
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20182.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20183.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20184.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20185.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20186.JPG' />
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/20187.JPG' />
                            </Carousel>
                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2019</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2019</h1>
                        </Col>
                    </Row>
                    <Row className="expo align-items-center">
                        <Col md={{ span: 6, offset: 1 }}>


                            <Carousel slidesPerPage={1} centered infinite autoPlay={6000}
  animationSpeed={1500}>
                                
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/2019affiche.JPG' />
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/20191.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20192.JPG' />
                                {isBrowser ? <video autoplay="autoplay" loop="loop" muted className="exhib-carousel-img">
                                    <source src='https://firstbkf.s3.us-east-2.amazonaws.com/2019video.mp4' type="video/mp4"/>
                                </video> : null}
                                
                            </Carousel>
                        </Col>
                        <Col className='exhib-description' md={{ span: 4, offset: 0 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <h2 className='exhib-h2'>- Breakfast Fashion Show -</h2>
                                    <h2 className='exhib-h2'>- Espace Jules Verne à Livry Gargan 29/03 -</h2>
                                    <div className='exhib-oeuvre'>
                                        Le Vendredi 29 Mars, s’est déroulée le Breakfast Fashion Show, une expérience immersive permise à la fois à travers une exposition tournée autour du thème de la femme mais aussi d’un défilé inédit pour la promotion de toutes nouvelles pièces de la marque Breakfast Paris customisées entièrement par ses membres.

                                    </div>

                                </div>
                            </AnimatedOnScroll>
                        </Col>

                    </Row>
                    <Row className="expo align-items-center">
                        <Col className='exhib-description' md={{ span: 4, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <h2 className='exhib-h2'>- Exposition BKF x BDA INSEEC -</h2>
                                    <h2 className='exhib-h2'>- Le Point Éphémère Paris  07/01 -</h2>
                                    <div className='exhib-oeuvre'>
                                        En étroite collaboration avec l’association du Bureau des Arts de l’école de commerce INSEEC Paris, le collectif Breakfast Paris a présenté les nouvelles oeuvres de ces membres lors d’une exposition d’art et de musique au bar du Point Éphémère qui fut décoré dans leur univers.

                                    </div>

                                </div>
                            </AnimatedOnScroll>
                        </Col>
                        <Col md={6}>

                            <Carousel slidesPerPage={1} centered infinite autoPlay={6000}
  animationSpeed={1500}>
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/2018affiche.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20181.JPG' /> 
                                {isBrowser ? <video autoplay="autoplay" loop="loop" muted className="exhib-carousel-img-portrait">
                                    <source src='https://firstbkf.s3.us-east-2.amazonaws.com/2018video.mp4' type="video/mp4"/>
                                </video> : null}
                                
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20182.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20183.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20184.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20185.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20186.JPG' />
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/20187.JPG' />
                            </Carousel>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2018</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2018</h1>
                        </Col>
                    </Row>
                    <Row className="expo align-items-center">
                        <Col md={{ span: 6, offset: 1 }}>



                            <Carousel slidesPerPage={1} centered infinite autoPlay={6000}
  animationSpeed={1500}>
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/2018affiche.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20181.JPG' /> 
                                {isBrowser ? <video autoplay="autoplay" loop="loop" muted className="exhib-carousel-img-portrait">
                                    <source src='https://firstbkf.s3.us-east-2.amazonaws.com/2018video.mp4' type="video/mp4"/>
                                </video> : null}
                                
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20182.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20183.JPG' />
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20184.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20185.JPG' />  
                                <img className="exhib-carousel-img" src='https://firstbkf.s3.us-east-2.amazonaws.com/20186.JPG' />
                                <img className="exhib-carousel-img-portrait" src='https://firstbkf.s3.us-east-2.amazonaws.com/20187.JPG' />
                            </Carousel>


                        </Col>
                        <Col className='exhib-description' md={{ span: 4, offset: 0 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <h2 className='exhib-h2'>- Breakfast Exposition -</h2>
                                    <h2 className='exhib-h2'>- Espace Jules Verne à Livry Gargan 27/01 -</h2>
                                    <div className='exhib-oeuvre'>
                                        Breakfast Paris, un collectif créatif rassemblant des amis ont souhaité faire découvrir l'atmosphère à travers laquelle ils vivent. L'exposition Breakfast a consisté à mélanger les peintures de l'artiste Emota et de Ludovic Garni, la musique du producteur et Dj Charles Offmann ainsi que la marque de vêtements Breakfast Paris à l'aide de la promotion de ses différents produits, tout cela dans une salle décorée afin qu'elle reflète au mieux leur univers.

                                    </div>

                                </div>
                            </AnimatedOnScroll>
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