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
                        <Col xs={{span:8,offset:3}} md={{span:7,offset:0}} className='my-auto'>
                            <AnimatedOnScroll className='exhib-description-soon' animationIn='fadeInUp' isVisible={true}>
                            
                                La Breakfast Exhibition, organisée par ce groupe d’amis dont la plupart sont des étudiants de l’INSEEC BS Paris, consiste à vous faire découvrir cette atmosphère en mélangeant leurs peintures, leurs musiques et leur marque de vêtements à l’aide de la promotion de ses différents produits, tout cela dans une salle décorée afin qu’elle reflète au mieux leur univers.<br></br>
                                Notre prochain projet serait de mettre en place une exposition (voir aussi un défilé) dans la mairie du 10ème arrondissement de Paris. Pourquoi ne pas mélanger notre univers aux peintures déstructurées avec un lieu qui, au contraire, resplendit par son architecture si bien établie ? Ce projet est en cours…….

                       
                            </AnimatedOnScroll>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1 className='exhib-h1 d-none d-sm-block' align='center'>2019</h1>
                            <h1 className='exhib-h1-mobile d-sm-none' align='center'>2019</h1>
                        </Col>
                    </Row>
                    
                    <Row className="expo align-items-center">
                        <Col className='exhib-description' md={{ span: 4, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='exhib-h2'>-Triptyque de Nuages-</h2>
                                        <h2 className='exhib-h2'>- Ludovic 2019 -</h2>
                                        <div className='exhib-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                        </Col>
                        <Col md={6}>

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