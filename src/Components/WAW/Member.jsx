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

        
         <Col onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover} md={4} xs={6}>
                                <AnimatedOnScroll animationIn='fadeInUpBig' animationInDuration='1500' isVisible={true}>
                                <Image className='visu-members' src={require('../../img/nuage.png')} fluid></Image>
                                </AnimatedOnScroll>
                            
    
        {
          this.state.isHovering &&
          <div>
            Hovering right meow! ldsiufc aez!y f!çy ze!èy yzçeuydç!uqzeiosd i!y  içzehdspdxj !èqt hàçzqeoy  çsyd oxizyqs !d oqshdx oajqzesd  osdy fc hhhfg sfgj  soyf oj! lzhfu akhe sxhki oçu 
          </div>
        }
     </Col>
    );
  }
}

export default Member;