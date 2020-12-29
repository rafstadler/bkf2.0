import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
import './fonts/Hijrnotes.ttf'
import ReactGA from 'react-ga';


const trackingId = "G-NT8LNQ0TBE"; // Replace with your Google Analytics tracking ID
 ReactGA.initialize(trackingId); 

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
),document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
