import React from 'react';
import img1 from '../assets/img/imgcool.jpg'
import "bootstrap/dist/css/bootstrap.css";
import Image from "react-bootstrap/Image";
import '../App.css';
import {Container, Row } from 'react-bootstrap';
import logo from '../assets/img/nysl_logo.png';
import styled from 'styled-components';
import { Link} from "react-router-dom";


//top of the page. Used styled components

const H1 = styled.h1({
    marginTop: '20px',
    fontSize: '2em',
    textAlign: "left", 
});




const Title = () => {
        return (
            <Container fluid >
                <Row>
                    <H1>Northside Youth Soccer Leage</H1>
                    <Image  style={{resizeMode: 'cover'}} src={img1}  alt="kids" />
                </Row>
            </Container>
        );
    }

//navbar 
    
const NavBar = () => {
    return(
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img alt='logo' class="logo" src={logo}></img>
            <div className="container-fluid d-flex justify-content-around nav-height">
                <Link className="navbar-brand" to="/upcoming">Home</Link>
                <Link className="navbar-brand" to="/cont">Contact</Link>
                <Link className="navbar-brand" to="/about">About</Link>
                <Link className="navbar-brand" to="/">Rules and Policies</Link>
                <Link className="navbar-brand" to="/gameinfo">Game Information</Link>
                <Link className="navbar-brand" to="/game">Registration Form</Link>
            </div>
        </nav>
    )
}

//upcoming events table with style cons. Used styled components

const H2 = styled.h2({
    fontSize: '1.8em',
    borderBottom: "2px solid black",
    textAlign: "center", 
});

const P = styled.p({
    fontSize: "1.2em",
    fontStyle: 'italic',
})
 

const UpComing = () => {
    return (
        
        <div class="container">
            
            <H2> Upcoming Events </H2>
            <ul>
                <P>August 4</P>
                <ul>NYSL Fundraiser</ul>
                <P>August 16</P>
                <ul>Season Kick-off: Meet the Teams</ul>
                <P>September 1</P>
                <ul>First Game of the Season (Check Game Schedule for details)</ul>
            </ul>
        </div>
    )
}


export {NavBar, UpComing}
export default Title

