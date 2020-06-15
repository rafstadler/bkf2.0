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
                            <Col  xs={{span:1,offset:0}} md={{span:2,offset:2}}>
                               
                                <h1 className='contact-h1  d-none d-sm-block my-auto' align='center' >&nbsp;&nbsp;CONTACT</h1>
                                <h1 className='contact-h1-mobile  d-sm-none my-auto' align='center'>CONTACT</h1>
                              

                            </Col>
                            <Col xs={{span:8,offset:3}} md={{span:7,offset:0}} className='my-auto'>
                                <div className='contact-description'>
                                    
                                    Business autour d'un thé :<br />&nbsp;&nbsp;<a href="mailto:ludo_garni@hotmail.fr" className="contact-mail">ludo.garni@hotmail.fr</a> &nbsp;/ &nbsp;0745686543<br /><br />
                                    
                                   Tatouage : <br />&nbsp;&nbsp;<a href="https://www.instagram.com/emota_design/" className="contact-mail">emota_design</a><br /><br />
                                   
                                    Design/Développement web :<br />&nbsp;&nbsp;<a href="mailto:raph.stadler@gmail.com" className="contact-mail">raph.stadler@gmail.com</a><br /><br />
                                    
                                    
                            
                                </div>
                            </Col>
                        </Row>

                        <Row className="contact-item">

                            <Col xs={{span:6,offset:1}} md={{span:7,offset:1}} className='my-auto'>
                                <div className='contact-description-left'>
                                   
                                    
                                    Ou contactez nous directement via instagram:<br />
                                    <a href="https://www.instagram.com/dududavies_/" className="contact-mail">dududavies_</a><br />
                                    <a href="https://www.instagram.com/emota.lov/" className="contact-mail">emota.lov</a><br />
                                    <a href="https://www.instagram.com/tchap.bkf/" className="contact-mail">tchap.bkf</a><br />
                                   
                            
                                </div>
                            </Col>
                            <Col  xs={{span:1,offset:0}} md={{span:2,offset:0}}>
                              
                                    <h1 className='contact-h1  d-none d-sm-block my-auto' align='center'>&nbsp;&nbsp;&nbsp;&nbsp;NUDES</h1>
                                <h1 className='contact-h1-mobile  d-sm-none my-auto' align='center'>&nbsp;&nbsp;&nbsp;&nbsp;NUDES</h1>
                                
                                

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