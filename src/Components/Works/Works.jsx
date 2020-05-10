import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col,Image} from 'react-bootstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Works.css'

class Works extends Component {

    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }
    render() {
        return (
            <div>
                <div className='works'></div>
                <div className='works-central'></div>
                
                <div className='page'>
                <div className='works-menu'> 
                    <Container align='center'>

                        <AnchorLink href='#clothes' className='menu-link'>Clothes</AnchorLink>
                        <AnchorLink href='#painting' className='menu-link'>Painting</AnchorLink>
                        <AnchorLink href='#music' className='menu-link'>Music</AnchorLink>
                        <AnchorLink href='#tattoo' className='menu-link'>Tatouage</AnchorLink>
                        <AnchorLink href='#dance' className='menu-link'>Dance</AnchorLink>

                    </Container>
                </div>


                <Container>
                    <h1 id="clothes" className='works-h1' align='center'>CLOTHES</h1>
                    <h1 id="painting" className='works-h1' align='center'>PAINTING</h1>
                    <h1 id="music" className='works-h1' align='center'>MUSIC</h1>
                    <h1 id="tattoo" className='works-h1' align='center'>TATOUAGE</h1>
                    <h1 id="dance" className='works-h1' align='center'>DANCE</h1>
                </Container>

                <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                    </div>
            </div>
        );
    }
}

export default Works;