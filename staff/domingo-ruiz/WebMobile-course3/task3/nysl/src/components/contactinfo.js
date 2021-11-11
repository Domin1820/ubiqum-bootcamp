import React from 'react';
import styled from 'styled-components';


const H2 = styled.h2({
    fontSize: '1.8em',
    borderBottom: "2px solid black",
    textAlign: "center", 
});

const EmailLink = () =>{
    return(
        <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
    )
}

const ContactUs = () => {
    return (
        <div class="container">
            <H2> Contact us </H2>
            <ul>
                <p>Please email us at {EmailLink}  </p>
                <p>We will reply to your email as soon as we can.</p>
            </ul>
        </div>
    )
}


export default ContactUs
export {EmailLink}