import React from 'react';


export default function Header(props) {
    return(
        <section id='header'>
            <div className='row'>
                <div className='col-6'>
                    <img className='cloud1' src='/Development-Portfolio/assets/images/cloud.png' />
                    <h1 className='boldHeading mt-2'>Hi. I'm Eric</h1>
                    <h3 className='boldHeading'>I'm a developer</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <img className='cloud2' src='/assets/images/cloud.png' />
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <img className='mountainImage' src='/assets/images/mountain.png' />
                </div>
            </div>
        </section>
    );
}