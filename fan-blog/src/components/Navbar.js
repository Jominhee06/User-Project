import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
    <nav>
    <h1>Cultured Fans</h1>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/artist">Artist</Link></li> 
        <li><Link to="/news">News</Link></li>
        <li><Link to="/social-media">SocialMediaFeed</Link></li>
        <li><Link to="/exclusivecontent">ExclusiveContent</Link></li>
        <li><Link to="/pushnotification">PushNotification</Link></li>     
    </ul>
    </nav>
    );
}

export default Navbar;
