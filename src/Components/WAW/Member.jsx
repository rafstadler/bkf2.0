import React, { Component } from 'react';
import {Container, Row, Col,Image} from 'react-bootstrap';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

class Member extends Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
            isHovering: false,
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering,
        };
    }

    render() {
        return (


            <Col onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} md={4}>
                <h2 className='waw-h2'>{this.props.nom}</h2>
                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1500' isVisible={true}>
                    <Image className='visu-members' src={require(`../../img/${this.props.photo}`)} fluid></Image>
                </AnimatedOnScroll>


                {this.state.isHovering &&
                        <div className='waw-fondateur'>
                            {this.props.description}
                        </div>
                }
            </Col>
        );
    }
}

export default Member;