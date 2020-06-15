import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route ,withRouter , Link} from 'react-router-dom';
import {Container, Row, Col,Image} from 'react-bootstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import './WAW.css';

class WAW extends Component {
    
    
    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }
    render() {
        return (
            <div className='page'>
                <div className='waw'></div>
                <div className='waw-central'></div>

                <Container align='center' fluid>
                    <Row>
                        <Col className='test'>
                            <h1 className='waw-h1  d-none d-sm-block' align='center'>BREAKFAST</h1>
                            <h1 className='waw-h1-mobile d-sm-none' align='center'>BREAKFAST</h1>
                            
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={{ span: 7, offset: 4 }}><AnimatedOnScroll animationIn='fadeInUp' isVisible={true}>
                            
                            <div className='waw-intro'>
                                &nbsp;&nbsp;&nbsp;Breakfast, c’est dans un premier temps une atmosphère, une façon très particulière de vivre sa vie. Mais c’est aussi une vision du monde et des points communs qui ont rassemblé un groupe d’amis en vue de construire un <b className='waw-b'>collectif créatif</b> mêlant <b className='waw-b'>art</b> et <b className='waw-b'>musique</b>.
                            </div>
                            </AnimatedOnScroll></Col>

                    </Row>

                    <Row>
                        <Col className='test'>
                            <h1 className='waw-h1 d-none d-sm-block' align='center'>LES FONDATEURS</h1>
                            <h1 className='waw-h1-mobile d-sm-none' align='center'>LES FONDATEURS</h1>
                        </Col>
                    </Row>

                    <Row className="fondateur">
                        <Col md={{ span: 4, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div className='waw-fondateur'>
                                    <h2 className='waw-h2'>  Ludovic Garni,</h2>membre fondateur du collectif créatif Breakfast Paris, est un artiste peintre s’inspirant du style impressionnisme et du réalisme afin de réaliser des <Link to="/works#painting"><b className='waw-b waw-link'>tableaux</b></Link> de paysages et d’autres de femmes : deux éléments primordiaux l’inspirant dans sa vie de tous les jours. Il est également gérant de la marque de <Link to="/works#clothes"><b className='waw-b waw-link'>vêtements</b></Link> Breakfast Paris en tant que Brand Manager mais aussi Art Director et Project Manager pour la mise en place des Breakfast Exhibitions.
                                </div>
                            </AnimatedOnScroll>
                        </Col>
                        <Col md={6}>
                            <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <Image className='image-fondateur' src={require('../../img/dudu.png')} fluid></Image>
                                </div>

                            </AnimatedOnScroll>
                        </Col>


                    </Row>

                    <Row className="fondateur">
                        
                        <Col className='d-md-none' md={4}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div className='waw-fondateur'>
                                    <h2 className='waw-h2'>  Emota,</h2>membre fondateur de la marque Breakfast Paris, il est un artiste accompli en tant que <Link to="/works#music"><b className='waw-b waw-link'>chanteur</b></Link>, <Link to="/works#painting"><b className='waw-b waw-link'>peintre</b></Link> et <Link to="/works#tattoo"><b className='waw-b waw-link'>tatoueur</b></Link>. Il réalise des tableaux s’inscrivant dans le style cubisme tout en s’inspirant de masques africains, de forme géométrique qu’il retravaille à sa manière dans un mélange formant des personnages défigurés tout cela afin de créer son propre style. Emota puise son inspiration principalement dans la faune et la flore tout en les ralliant à la femme et à ses personnages aux masques africains.
                                </div>
                            </AnimatedOnScroll>
                        </Col>

                        <Col md={{ span: 6, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <Image className='image-fondateur' src={require('../../img/emota.png')} fluid></Image>
                                </div>

                            </AnimatedOnScroll>
                        </Col>

                        <Col className='d-none d-md-block' md={4}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                <div className='waw-fondateur'>
                                    <h2 className='waw-h2'>  Emota,</h2>membre fondateur de la marque Breakfast Paris, il est un artiste accompli en tant que <Link to="/works#music"><b className='waw-b waw-link'>chanteur</b></Link>, <Link to="/works#painting"><b className='waw-b waw-link'>peintre</b></Link> et <Link to="/works#tattoo"><b className='waw-b waw-link'>tatoueur</b></Link>. Il réalise des tableaux s’inscrivant dans le style cubisme tout en s’inspirant de masques africains, de forme géométrique qu’il retravaille à sa manière dans un mélange formant des personnages défigurés tout cela afin de créer son propre style. Emota puise son inspiration principalement dans la faune et la flore tout en les ralliant à la femme et à ses personnages aux masques africains.
                                </div>
                            </AnimatedOnScroll>
                        </Col>


                    </Row>

                    <Row className="fondateur">
                        <Col md={{ span: 4, offset: 1 }}>
                            <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1500' isVisible={true}>
                                <div className='waw-fondateur'>
                                    <h2 className='waw-h2'>  Tchap,</h2>membre fondateur du collectif créatif Breakfast Paris, est un <Link to="/works#music"><b className='waw-link waw-b'>rappeur</b></Link>,<b className='waw-b'>danseur</b>, event planner et commercial. Tout en participant au bon fonctionnement de la marque Breakfast Paris et de la mise en place des évènements avec Ludovic Garni, Tchap a récemment sorti des titres tels que Trouble, En Scène ou encore Replay.
                                </div>
                            </AnimatedOnScroll>
                        </Col>
                        <Col md={6}>
                            <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                <div>
                                    <Image className='image-fondateur' src={require('../../img/tchap.png')} fluid></Image>
                                </div>

                            </AnimatedOnScroll>
                        </Col>
                    </Row>

                    <Row>
                        <Col className='test'>
                            <h1 className='waw-h1 d-none d-sm-block' align='center'>HISTORY</h1>
                            <h1 className='waw-h1-mobile d-sm-none' align='center'>HISTORY</h1>

                        </Col>
                    </Row>
                    <div className="waw-div-history">
                         <Row>
                            <Col sm={{ span: 7, offset: 1 }}><AnimatedOnScroll animationIn='fadeInUp' isVisible={true}>

                                <div className='waw-history'>
                                    &nbsp;&nbsp;&nbsp;Bkf (abréviation de Breakfast) est <b className='waw-b'> une atmosphère </b> née de plusieurs lendemains de soirées. Nous avons pris l'habitude de boire tous ensemble une tasse de thé en fin de soirée/début de journée. Un moment de calme, de partage et de réflexion autour de nos projets et nos avenirs. <b className='waw-b'>Ce rituel</b> on le nomme aujourd’hui comme étant le « Breakfast ». Pour nous, il est devenu nécessaire de le <b className='waw-b'>partager</b> au quotidien. 
                                </div>
                                </AnimatedOnScroll></Col>

                        </Row>
                        <Row>
                            <Col sm={{ span: 7, offset: 4 }}><AnimatedOnScroll animationIn='fadeInUp' isVisible={true}>

                                <div className='waw-history'>
                                    &nbsp;&nbsp;&nbsp;Nous partageons ce <b className='waw-b'> mode de vie</b> à travers notre marque de vêtements, notre façon d’être et <b className='waw-b'>nos créations</b> qu’elles soient musicales ou artistiques.
                                </div>
                                </AnimatedOnScroll></Col>

                        </Row>
                    </div>
                    <Row>
                        <Col className='test'>
                            <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                        </Col>
                    </Row>
                </Container>


            </div>
        );
    }
}

export default WAW;