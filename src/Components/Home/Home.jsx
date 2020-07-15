import React, { Component } from 'react';
import SplitText from 'react-pose-text';
import './Home.css';
import { BrowserRouter as Router, Switch, Route ,withRouter , Link} from 'react-router-dom';

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
        this.state = {hidden : true};
        props.callbackPage(props.location);
    }
    
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({hidden: false});
        }, 5000);
    }
    
render() {
    return (
        <div>
 
            <video autoplay="autoplay" loop="loop" muted playsinline='playsinline' className="video">
                <source src={require('../../img/acceuilbq.mp4')} type="video/mp4"/>
            </video>
            <div className='caption page' align='center'>
                <SplitText  className="home-title" initialPose="exit" pose="enter" charPoses={charPoses}>Breakfast</SplitText>
                <br></br>
                {this.state.hidden ? '' : <Link to='/who_are_we' className='nav-link-white'>GET STARTED</Link>}
  
             
            </div>
            

            <footer className='home-footer' align="center">@BKF2020 by Stadler Raphael</footer>


        </div>

    );
}
}

export default Home;