import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, Navbar,Image} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Contact.css';
class Contact extends Component {

    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }
    render() {
        return (
            <div>
                <div className='contact'></div>
                <div className='contact-central'></div>
                <div className='page'>

                    <Container className="contact-body" fluid align='center'>

                        <Row className="contact-item">
                            <Col  xs={{span:1,offset:2}} md={{span:2,offset:2}}>
                               
                                <h1 className='contact-h1  d-none d-sm-block my-auto' align='center' >CONTACT</h1>
                                <h1 className='contact-h1-mobile  d-sm-none my-auto' align='center'>CONTACT</h1>
                              

                            </Col>
                            <Col xs={{span:6,offset:2}} md={{span:7,offset:0}} className='my-auto'>
                                <div className='contact-description'>
                                    Pour toute question professionnelle merci de nous envoyer un <a href="mailto:ludo_garni@hotmail.fr" className="contact-b">MAIL</a> ou nous contacter au 0786536525.<br />
                                   
                                </div>
                                <div className='contact-description'>
                                    Raphael Stadler, membre de la BKF et web designer est aussi à l'affut de nouveaux projets et se fera un plaisir de vous aider, merci de le contacter par <a href="mailto:raph.stadler@gmail.com" className="contact-b">MAIL</a>. 
                                </div>
                            </Col>
                        </Row>

                        <Row className="contact-item">

                            <Col xs={{span:6,offset:1}} md={{span:7,offset:1}} className='my-auto'>
                                <div className='contact-description'>
                                    
                                </div>
                            </Col>
                            <Col  xs={{span:1,offset:0}} md={{span:2,offset:0}}>
                              
                                    <h1 className='contact-h1  d-none d-sm-block my-auto' align='center'>NUDES</h1>
                                <h1 className='contact-h1-mobile  d-sm-none my-auto' align='center'>NUDES</h1>
                             

                            </Col>
                        </Row>


                    </Container>

                    <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                </div>
            </div>
        );
    }
}

export default Contact;