import React from 'react';

export default function Skills(props) {
    return (
        <section id='skills'>
            <div className='row mb-4'>
                <div className='col-12 col-sm-10 mx-auto'>
                    <h1 className='boldHeading mb-3'>My Stack</h1>
                    <p className='paragraph'>I have working knowledge of full-stack development. My primary technology stack is MERN due to the continuity that is offered through having JS across the entire development process. However, I do have experience with LAMP stacks as well, and enjoy working with new technologies any chance I get. </p>
                </div>
            </div>
            <div className='row align-items-center mb-4'>
                <div className='col-9 col-sm-3 mx-auto'>
                    <img className='skillsImage' src='/development-portfolio/assets/images/computer.png' />
                </div>
                <div className='col-12 col-sm-9'>
                    <h2 className='boldHeading skillText'>Front-End Development</h2>
                    <p className='paragraph skillText'>The front-end is vitally important to any application. I enjoy working with front-end technologies to develop visual/structural elements of applications.</p>
                </div>
            </div>
            <div className='row align-items-center mb-4'>
                <div id='mobileView' className='col-9 col-sm-3 mx-auto'>
                    <img className='skillsImage' src='/development-portfolio/assets/images/design.png' />
                </div>
                <div className='col-12 col-sm-9'>
                    <h2 className='boldHeading'>UI/UX</h2>
                    <p className='paragraph'>I'm passionate about creating great looking applications. Using color theory and typography, I create apps that are not just functional, but visually aesthetic.</p>
                </div>
                <div id='desktopView' className='col-9 col-sm-3'>
                    <img className='skillsImage' src='/development-portfolio/assets/images/design.png' />
                </div>
            </div>
            <div className='row align-items-center mb-4'>
                <div className='col-9 col-sm-3 mx-auto'>
                    <img className='skillsImage' src='/development-portfolio/assets/images/backendimage.png' />
                </div>
                <div className='col-12 col-sm-9'>
                    <h2 className='boldHeading skillText'>Back-End Development</h2>
                    <p className='paragraph skillText'>The back-end development handles the 'behind-the-scenes' functionality of web applications. Using back-end technologies, I'm able to manage the webpage through a server and work with databases.</p>
                </div>
            </div>
        </section>
    );
}