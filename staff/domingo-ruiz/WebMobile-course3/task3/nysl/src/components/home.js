import React from 'react';
import img1 from '../assets/img/imgcool.jpg'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import '../App.css';
import {Container, Row } from 'react-bootstrap';
import logo from '../assets/img/nysl_logo.png';
import { Link} from "react-router-dom";
import { LogOut, LogInButton } from './firebase'
import {useUserState} from './firebase'


//top of the page. Used styled components
const Title = () => {
        return (
            <Container fluid >
                <Row>
                    <h1>Northside Youth Soccer Leage</h1>
                    <Image  style={{resizeMode: 'cover'}} src={img1}  alt="kids" />
                </Row>
            </Container>
        );
    }


//navbar 
    
const NavBar = () => {
    const [user] = useUserState();
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img alt='logo' class="logo" src={logo}></img>
            <div className="container-fluid d-flex justify-content-around nav-height">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/cont">Contact</Link>
                <Link className="navbar-brand" to="/schedule">Game Information</Link>
                { user ? <LogOut /> : <LogInButton /> }
            </div>
        </nav>
    )
}

//upcoming events table with style cons. Used styled components
 
const UpComing = () => {
    return (
        
        <div class="container">
            
            <h2> Upcoming Events </h2>
            <ul>
                <p>August 4</p>
                <ul>NYSL Fundraiser</ul>
                <p>August 16</p>
                <ul>Season Kick-off: Meet the Teams</ul>
                <p>September 1</p>
                <ul>First Game of the Season (Check Game Schedule for details)</ul>
            </ul>
        </div>
    )
}






export {NavBar, UpComing}
export default Title

