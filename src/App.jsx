import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route ,withRouter , Link} from 'react-router-dom';
import {Container, Row, Col, Navbar} from 'react-bootstrap';
import {TransitionGroup,CSSTransition} from "react-transition-group";
import Home from './Components/Home/Home';
import WAW from './Components/WAW/WAW';
import Works from './Components/Works/Works';
import Exhib from './Components/Exhib/Exhib';
import Contact from './Components/Contact/Contact';
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
                        
                        <Navbar className='color-nav' fixed='top' align="center">

                            <Col><Link to='/' className='nav-brand'> Breakfast </Link></Col>
                            <Col><Link to='/who_are_we' className='nav-link' style={this.state.page.pathname==="/who_are_we" ? {'text-decoration':'line-through underline'} : {}}>Who Are We</Link></Col>
                            <Col><Link to='/works' className='nav-link' style={this.state.page.pathname==="/works" ? {'text-decoration':'line-through underline'} : {}}> Works </Link></Col>
                            <Col><Link to='/exhib' className='nav-link' style={this.state.page.pathname==="/exhib" ? {'text-decoration':'line-through underline'} : {}}> Exhibitions </Link></Col>
                            <Col><Link to='/contact' className='nav-link' style={this.state.page.pathname==="/contact" ? {'text-decoration':'line-through underline'} : {}}> Contacts </Link></Col>
                            <Col><a target="_blank" rel="noopener noreferrer" href='https://www.instagram.com/breakfast_paris/' className='nav-link'> Instagram </a></Col>
                        </Navbar>

                
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
