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
                                    dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                </div>
                            </Col>
                        </Row>

                        <Row className="contact-item">

                            <Col xs={{span:6,offset:1}} md={{span:7,offset:1}} className='my-auto'>
                                <div className='contact-description'>
                                    dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
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