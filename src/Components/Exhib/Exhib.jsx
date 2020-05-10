import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col, Navbar,Image} from 'react-bootstrap';
import {Animated} from "react-animated-css";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Exhib.css';

class Exhib extends Component {

    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }

    render() {
        return (
            <div>
                <div className='exhib'></div>
                <div className='exhib-central'></div>
                <div className='page'>

                   <Container>
                    <h1 className='exhib-h1' align='center'>SOON</h1>
                    <h1 className='exhib-h1' align='center'>2019</h1>
                    <h1 className='exhib-h1' align='center'>2018</h1>
                    <h1 className='exhib-h1' align='center'>2017</h1>
                    <h1 className='exhib-h1' align='center'>2016</h1>
                </Container>

                <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                </div>
            </div>
        );
    }
}

export default Exhib;