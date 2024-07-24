import React from 'react';
import { projectsWeb, projectsMobile } from '../shared/projects';
import { Card, CardBody, CardTitle, CardImg, CardText, Button } from 'reactstrap';

export default function Portfolio(props) {

    let lastWebProject = projectsWeb[projectsWeb.length - 1];
    let lastMobileProject = projectsMobile[projectsMobile.length - 1];

    return (
        <section id='portfolio'>
            <div className='row'>
                <div className='col'>
                    <h1 className='boldHeading mb-5'>My Projects (Web)</h1>
                </div>
            </div>
            <div className='row'>
                {projectsWeb.map(a =>
                    a === lastWebProject ?
                        projectsWeb.indexOf(lastWebProject) % 2 === 0 ?
                            <div className='col-12 col-md-8 mx-auto cardContainer'>
                                <Card className='projectCard'>
                                    <CardBody>
                                        <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                        <CardText className='cardText'>{a.description}</CardText>
                                        <CardImg className='cardImg mt-2 mb-4' src={a.imageUrl}/>
                                        <CardText className='technologyUsed'>Built Using:</CardText>
                                        {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                        <a target='_blank_' href={a.liveLink}><Button className='w-75 m-2'>{a.linkText}</Button></a>
                                        {a.hasGithubLink ? <a target='_blank_' href={a.githubLink}><Button className='w-75'>View Github Repository</Button></a> : ''}
                                    </CardBody>
                                </Card>
                            </div>
                        :
                            <div className='col-12 col-md-6 cardContainer'>
                                <Card className='projectCard'>
                                    <CardBody>
                                        <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                        <CardText className='cardText'>{a.description}</CardText>
                                        <CardImg className='cardImg mt-2 mb-4' src={a.imageUrl}/>
                                        <CardText className='technologyUsed'>Built Using:</CardText>
                                        {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                        <a target='_blank_' href={a.liveLink}><Button className='w-50 m-2'>{a.linkText}</Button></a>
                                        {a.hasGithubLink ? <a target='_blank_' href={a.githubLink}><Button className='w-50 m-2'>View Github Repository</Button></a> : ''}
                                    </CardBody>
                                </Card>
                            </div>       
                    :
                        <div className='col-12 col-md-6 cardContainer'>
                            <Card className='projectCard'>
                                <CardBody>
                                    <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                    <CardText className='cardText'>{a.description}</CardText>
                                    <CardImg className='cardImg mt-2 mb-4' src={a.imageUrl}/>
                                    <CardText className='technologyUsed'>Built Using:</CardText>
                                    {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                    <a target='_blank_' href={a.liveLink}><Button className='w-50 m-2'>{a.linkText}</Button></a>
                                    {a.hasGithubLink ? <a target='_blank_' href={a.githubLink}><Button className='w-50 m-2'>View Github Repository</Button></a> : ''}
                                </CardBody>
                            </Card>
                        </div>
                )}
            </div>
            <hr />
            <div className='row'>
                <div className='col'>
                    <h1 className='boldHeading mb-5'>My Projects (Mobile)</h1>
                </div>
            </div>
            <div className='row'>
                {projectsMobile.map(a =>
                    a === lastMobileProject ?
                        projectsMobile.indexOf(lastMobileProject) % 2 === 0 ?
                            <div className='col-12 col-md-8 cardContainer'>
                                <Card className='projectCard'>
                                    <CardBody>
                                        <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                        <CardText className='cardText'>{a.description}</CardText>
                                        <CardImg className='cardImgMobile mt-2 mb-4' src={a.imageUrl}/>
                                        <CardText className='technologyUsed'>Built Using:</CardText>
                                        {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                        <a target='_blank_' href={a.githubLink}><Button className='w-40'>View Github Repository</Button></a>
                                    </CardBody>
                                </Card>
                            </div>
                        :
                            <div className='col-12 col-md-6 cardContainer'>
                                <Card className='projectCard'>
                                    <CardBody>
                                        <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                        <CardText className='cardText'>{a.description}</CardText>
                                        <CardImg className='cardImgMobile mt-2 mb-4' src={a.imageUrl}/>
                                        <CardText className='technologyUsed'>Built Using:</CardText>
                                        {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                        <a target='_blank_' href={a.githubLink}><Button className='w-75'>View Github Repository</Button></a>
                                    </CardBody>
                                </Card>
                            </div>
                    :
                        <div className='col-12 col-md-6 cardContainer'>
                            <Card className='projectCard'>
                                <CardBody>
                                    <CardTitle className='cardTitle'>{a.name}</CardTitle>
                                    <CardText className='cardText'>{a.description}</CardText>
                                    <CardImg className='cardImgMobile mt-2 mb-4' src={a.imageUrl}/>
                                    <CardText className='technologyUsed'>Built Using:</CardText>
                                    {a.technologyUsed.map(i => <CardText>{i}</CardText>)}
                                    <a target='_blank_' href={a.githubLink}><Button className='w-75'>View Github Repository</Button></a>
                                </CardBody>
                            </Card>
                        </div>
                )}
            </div>
        </section>
    );
}