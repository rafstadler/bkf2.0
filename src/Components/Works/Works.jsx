import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {Container, Row, Col,Image} from 'react-bootstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import AudioPlayer from "react-modular-audio-player";
import ReactPlayer from 'react-player'
import './Works.css'

class Works extends Component {

scrollToLocation = () => {
  const { hash } = window.location;
  if (hash !== '') {
    let retries = 0;
    const id = hash.replace('#', '');
    const scroll = () => {
      retries += 0;
      if (retries > 50) return;
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView(), 0);
      } else {
        setTimeout(scroll, 100);
      }
    };
    scroll();
  }
}

    constructor(props){
        super(props);
        props.callbackPage(props.location);
        this.scrollToLocation();
        
    }
    render() {

        let rearrangedPlayer = [
            {
                innerComponents: [
                    {
                        type: "play",
                        style: {
                            width: "100%",
                            justifyContent: "center",
                            filter: "invert(100%)",
                            opacity: "0.4"
                        }
                    }
                ]
            }
        ];
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


                    <Container align='center' fluid>
                        <Row>
                            <Col id="clothes">
                                <h1 className='works-h1-mobile d-sm-none' align='center'>CLOTHES</h1>
                                <h1 className='works-h1 d-none d-sm-block' align='center'>CLOTHES</h1>
                                
                                
                            </Col>
                        </Row>    
                        <Row className="oeuvre">
                            <Col className='works-description' md={{ span: 4, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>
                            <Col md={6}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <Image className='visu' src={require('../../img/nuage.png')} fluid></Image>
                                    </div>

                                </AnimatedOnScroll>
                            </Col>


                        </Row>

                        <Row className="oeuvre">
                            
                            <Col className='works-description d-md-none' md={4}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2-left'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2-left'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>

                            <Col md={{ span: 6, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <Image className='visu' src={require('../../img/nuage.png')} fluid></Image>
                                    </div>

                                </AnimatedOnScroll>
                            </Col>
                            <Col className='works-description d-none d-md-block' md={4}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2-left'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2-left'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>


                        </Row>
                        <Row>
                            <Col id="painting">
                                <h1 className='works-h1 d-none d-sm-block' align='center'>PAINTING</h1>
                                <h1 className='works-h1-mobile d-sm-none' align='center'>PAINTING</h1>
                            </Col>
                        </Row>
                        
                        <Row className="oeuvre">
                            <Col className='works-description' md={{ span: 4, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>
                            <Col md={6}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <Image className='visu' src={require('../../img/nuage.png')} fluid></Image>
                                    </div>

                                </AnimatedOnScroll>
                            </Col>


                        </Row>

                        <Row className="oeuvre">
                            
                            <Col className='d-md-none works-description' md={4}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2-left'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2-left'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>

                            <Col  md={{ span: 6, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <Image className='visu' src={require('../../img/nuage.png')} fluid></Image>
                                    </div>

                                </AnimatedOnScroll>
                            </Col>
                            <Col className=' d-none d-md-block works-description' md={4}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2-left'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2-left'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>


                        </Row>
                        <Row>
                            <Col id="music">
                                <h1 className='works-h1 d-none d-sm-block' align='center'>MUSIC</h1>
                                <h1 className='works-h1-mobile d-sm-none' align='center'>MUSIC</h1>
                            </Col>
                        </Row>
                        
                        
                        <Row className="oeuvre">
                            <Col className='works-description' md={{ span: 4, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>
                            <Col md={6}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div className='visu-media' >

                                        <AudioPlayer
                                            audioFiles={[
                                                {
                                                    src:require('../../sons/Tamale.mp3'),
                                                    title: "Rolling In The Deep",
                                                    artist: "Adele"
                                                }
                                            ]}
                                            rearrange={rearrangedPlayer}
                                            playerWidth="100%"
                                            iconSize="100%"
                                            />
                                    </div>

                                </AnimatedOnScroll>
                            </Col>


                        </Row>
                        
                        <Row className="oeuvre">
                            <Col className='works-description' md={{ span: 4, offset: 1 }}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1200' isVisible={true}>
                                    <div>
                                        <h2 className='works-h2'>-Triptyque de Nuages-</h2>
                                        <h2 className='works-h2'>- Ludovic 2019 -</h2>
                                        <div className='works-oeuvre'>
                                            dj cioqjd cxiojze sdic zeiucd xzeuidhs cxieodjs cpxiuoehd vciujh rdiufh czeiukqshdf xiuh eiudhsc xizeldkushd xi odijzojd oi coij eoij oiehjz iu hfviuh zeiuh fiu ziedj xoqhzuzidjh iued ci eiv hieuhvkjndckjsnck zej o nci nc ke ck eic kuhjsb vcij;hs nidkjhcnx kq;ujhkj d ukmudj nduis kjdicu xuskd yux kzjqsdydjxn sjdjs fndxuhqjsh sudx  zsij xqks jd xizks.
                                        </div>

                                    </div>
                                </AnimatedOnScroll>
                            </Col>
                            <Col md={6}>
                                <AnimatedOnScroll animationIn='fadeInUp' animationInDuration='1200' isVisible={true}>
                                    <div className='visu' >
                                        <ReactPlayer url='https://www.youtube.com/watch?v=c3UR4zpSP84' className='video-player'/>
                                    </div>

                                </AnimatedOnScroll>
                            </Col>


                        </Row>
                        <Row>
                            <Col id="tattoo">
                                <h1 className='works-h1 d-none d-sm-block' align='center'>TATOUAGE</h1>
                                <h1 className='works-h1-mobile d-sm-none' align='center'>TATOUAGE</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col id="dance">
                                <h1 className='works-h1 d-none d-sm-block' align='center'>DANCE</h1>
                                <h1 className='works-h1-mobile d-sm-none' align='center'>DANCE</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <footer className='other-footer' align="center">@BKF2020 by Stadler Raphael</footer>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default Works;