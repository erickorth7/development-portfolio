import React from 'react';

export default function About(props) {
    return (
        <section id='about'>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='boldHeading mb-4'>Hello.</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-10 col-md-6 mx-auto'>
                    <img className='aboutImage mb-4' src='/development-portfolio/assets/images/Eric-Korth-500x500.jpg' /> 
                    <p className='paragraph'>My name is Eric. I’m a web/mobile developer. My goal in anything I develop is beauty through simplicity - creating pages & applications that communicate a clear message and that are visually appealing.</p>
                </div>
            </div>
        </section>
    );
}