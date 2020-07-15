import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route ,withRouter , Link} from 'react-router-dom';
import {Container, Row, Col, Navbar, NavDropdown} from 'react-bootstrap';
import {TransitionGroup,CSSTransition} from "react-transition-group";
import {BrowserView,MobileView,isBrowser,isMobile} from "react-device-detect";
import Home from './Components/Home/Home';
import WAW from './Components/WAW/WAW';
import Works from './Components/Works/Works';
import Exhib from './Components/Exhib/Exhib';
import Contact from './Components/Contact/Contact';
import ScrollToTop from './Components/ScrollToTop';
import styled from "styled-components";


class App extends Component {

    constructor(props) {
        super(props);
        this.state= {
            page : '/',

        }

    }

    pageCallback = (page) => {
        this.setState({page: page});
    }

    render() {


        return (
            <Router>
                <Route render={({ location }) => (
                        <div>

                            <Navbar className={this.state.page.pathname==="/" ? 'transparent-nav' : 'white-nav'} fixed='top' align='center'>


                                <Col sm={2} className='d-none d-sm-none d-lg-block'><Link to='/' className={this.state.page.pathname==="/" ? 'nav-brand-white' : 'nav-brand' }>&nbsp;Breakfast&nbsp;</Link></Col>
                                
                                <Col sm={8} className='d-lg-none d-sm-block'><Link to='/' className={this.state.page.pathname==="/" ? 'nav-brand-white' : 'nav-brand' }>&nbsp;Breakfast&nbsp;</Link></Col>
                                
                                
                                <Col sm={2} className='d-none d-sm-none d-lg-block'><Link to='/who_are_we' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } style={this.state.page.pathname==="/who_are_we" ? {'text-decoration':'line-through underline'} : {}}>Who Are We</Link></Col>
                                <Col sm={2} className='d-none d-sm-none d-lg-block'><Link to='/works#clothes' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } style={this.state.page.pathname==="/works" ? {'text-decoration':'line-through underline'} : {}}> Works </Link></Col>
                                <Col sm={2} className='d-none d-sm-none d-lg-block'><Link to='/exhib' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } style={this.state.page.pathname==="/exhib" ? {'text-decoration':'line-through underline'} : {}}> Exhibitions </Link></Col>
                                <Col sm={2} className='d-none d-sm-none d-lg-block'><Link to='/contact' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } style={this.state.page.pathname==="/contact" ? {'text-decoration':'line-through underline'} : {}}> Contacts </Link></Col>
                                <Col sm={2} className='d-none d-sm-none d-lg-block'>
                                    {isBrowser ? <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/breakfast_paris/' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } align='center' >Instagram</a> : <a href='instagram://user?username=breakfast_paris' className={this.state.page.pathname==="/" ? 'nav-link-white' : 'nav-link' } align='center' style={{'color':'black'}}>Instagram</a>}
                                </Col>


                                <Col sm={2} className="header-drop d-lg-none d-sm-block">
                                    <NavDropdown alignRight title={this.props.page} id={this.state.page.pathname==="/" ? 'nav-dropdown-white' : 'nav-dropdown' }>
                                        <NavDropdown.Item><Link to='/who_are_we' className='nav-link' align='center' style={this.state.page.pathname==="/who_are_we" ? {'text-decoration':'line-through underline','color':'black'} : {'color':'black'}}>Who Are We</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to='/works#clothes' className='nav-link' align='center' style={this.state.page.pathname==="/works" ? {'text-decoration':'line-through underline','color':'black'} : {'color':'black'}}>Works</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to='/exhib' className='nav-link'  align='center' style={this.state.page.pathname==="/exhib" ? {'text-decoration':'line-through underline','color':'black'} : {'color':'black'}}>Exhibitions</Link></NavDropdown.Item>
                                        <NavDropdown.Item><Link to='/contact' className='nav-link' align='center' style={this.state.page.pathname==="/contact" ? {'text-decoration':'line-through underline','color':'black'} : {'color':'black'}}>Contacts</Link></NavDropdown.Item>
                                        {isBrowser ? <a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/breakfast_paris/' className='nav-link' align='center' style={{'color':'black'}}>Instagram</a> : <a href='instagram://user?username=breakfast_paris' className='nav-link' align='center' style={{'color':'black'}}>Instagram</a>}
                                        

                                    </NavDropdown>
                                </Col>

                            </Navbar>
                            
                            <ScrollToTop />


                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    timeout={450}
                                    classNames='fade'
                                    mountOnEnter={true} unmountOnExit={true}
                                    >
                                    <Switch location={location}>
                                        <Route exact path='/' render={(props) => <Home {...props} callbackPage={this.pageCallback} />} />
                                        <Route path='/who_are_we' render={(props) => <WAW {...props} callbackPage={this.pageCallback} />} />
                                        <Route path='/works' render={(props) => <Works {...props} callbackPage={this.pageCallback} />} />
                                        <Route path='/exhib' render={(props) => <Exhib {...props} callbackPage={this.pageCallback} />} />
                                        <Route path='/contact' render={(props) => <Contact {...props} callbackPage={this.pageCallback} />} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    )}/>
            </Router>
        );
    }
}

export default App;
