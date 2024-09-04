import React from 'react';
import { Button } from 'reactstrap';
import { FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Contact(props) {
    return (
        <>
            <section id='contact'>
                <div className='row mb-4'>
                    <div className='col'>
                        <h1 className='boldHeading'>Get In Touch</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <a href='mailto:ericbenjaminkorth@gmail.com'><Button className='contactButton m-2'><FaEnvelope /> Email</Button></a>
                        <a target='_blank_' href='https://www.linkedin.com/in/eric-k-412398184/'><Button className='contactButton m-2'><FaLinkedin /> LinkedIn</Button></a>
                    </div>
                </div>
            </section>
            <section id='connect'>
                <div className='row mb-4'>
                    <div className='col'>
                        <h1 className='boldHeading'>Connect With Me</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <a target='_blank_' href='https://github.com/erickorth7'><FaGithub className='socialIcons'/></a>
                    </div>
                </div>
            </section>
            <section id='footer'>
                <div className='row'>
                    <div className='col'>
                        <p className='paragraph'>{'\u00A9'} 2024 Eric Korth</p>
                    </div>
                </div>
            </section>
        </>
    );
}