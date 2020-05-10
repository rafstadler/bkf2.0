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

                    <Container>
                        <h1 className='contact-h1' align='center'>CONTACT</h1>
                        <h1 className='contact-h1' align='center'>NUDES</h1>
                       
                    </Container>

                    <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                </div>
            </div>
        );
    }
}

export default Contact;