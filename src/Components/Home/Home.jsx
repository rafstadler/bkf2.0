import React, { Component } from 'react';
import SplitText from 'react-pose-text';
import './Home.css';

const charPoses = {
        exit: { opacity: 0, y: 0 },
        enter: {
            opacity: 0.8,
            y: 0,
            delay: ({ charIndex }) => charIndex * 700
        }
    };

class Home extends Component {
    
    constructor(props){
        super(props);
        props.callbackPage(props.location);
    }
    
render() {
    return (
        <div>
 
            <video autoplay="autoplay" loop="loop" muted className="video">
                <source src={require('../../img/acceuilbq.mp4')} type="video/mp4"/>
            </video>
            <div className='caption page' align='center'>
                <SplitText  initialPose="exit" pose="enter" charPoses={charPoses}>Breakfast</SplitText>
            </div>
            

            <footer className='home-footer' align="center">@BKF2020 by Stadler Raphael</footer>


        </div>

    );
}
}

export default Home;