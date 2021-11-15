import React from 'react';



const EmailLink = () =>{
    return(
        <a href="mailto:nysl@chisoccer.org">nysl@chisoccer.org</a>
    )
}

const ContactUs = () => {
    return (
        <div class="container">
            <h2> Contact us </h2>
            <ul>
                <p>Please email us at {EmailLink}  </p>
                <p>We will reply to your email as soon as we can.</p>
            </ul>
        </div>
    )
}


export default ContactUs
export {EmailLink}