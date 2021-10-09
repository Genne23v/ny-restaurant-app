import React from 'react';
import { Card, Accordion, Badge } from 'react-bootstrap';

export default function About() {
    return (
        <>
            <Accordion defaultActiveKey='0'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Card.Header}
                            variant='link'
                            eventKey='0'>
                            Hello, I'm Wonkeun!
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='0'>
                        <Card.Body>
                            I love web development with JS stack, as well as
                            C/C++ compiled language programming. There will be a
                            lot more to come for my career as a programmer. Stay
                            tuned!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Card.Header}
                            variant='link'
                            eventKey='1'>
                            Latest Projects
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='1'>
                        <Card.Body>
                        
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='2'>
                                        <h6>
                                            Airbnb Clone
                                            <Badge variant='primary'>New</Badge>
                                        </h6>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey='2'>
                                    <Card.Body>
                                        Airbnb clone full stack website using
                                        Node.js, MongoDB, Heroku. Used
                                        handlebars to template front-end and a
                                        com
                                        bination of pure CSS and Bootstrap.
                                        User input validation, user
                                        authentication, admin/user
                                        authorization, data object CRUD
                                        operations are implemented.
                                        </Card.Body>
                                </Accordion.Collapse>
                                </Card>

                                    <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='3'>
                                        <h6>
                                            Travel Post
                                            <Badge variant='primary'>New</Badge>
                                        </h6>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey='3'>
                                <Card.Body>
                                    Travel front-end page inspired by world travellers. Pure HTML & CSS webpage using SmoothScroll and OwlCarousel libraries.
                                    </Card.Body>
                                </Accordion.Collapse>
                                </Card>

                                    <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='4'>
                                        <h6>React Scheduler</h6>
                                    </Accordion.Toggle>
                                <Accordion.Collapse eventKey='4'>
                                <Card.Body>ggg</Card.Body>
                                </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Card.Header}
                            variant='link'
                            eventKey='5'>
                            Tech Stack That I Use &amp; Interests
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='5'>
                        <Card.Body>
                            <p>
                            Web Development
                            <Badge variant='primary'>HTML</Badge>
                            <Badge variant='danger'>CSS</Badge>
                            <Badge variant='warning'>JavaScript</Badge>
                            <Badge variant='success'>Node.js</Badge>
                            <Badge variant='info'>React.js</Badge>
                            <Badge variant='info'>Bootstrap</Badge>
                            <Badge variant='secondary'>SAAS</Badge>
                            <Badge variant='secondary'>Visual Studio Code</Badge>
                            </p>
                            <p>
                            Object Oriented Programming
                            <Badge variant='primary'>C++</Badge>
                            <Badge variant='danger'>Java</Badge>
                            <Badge variant='warning'>UML</Badge>
                            <Badge variant='warning'>Visual Studio</Badge>
                            <Badge variant='warning'>Eclipse</Badge>
                            </p>
                            <p>
                            Linux/Unix and Embedded Programming
                            <Badge variant='warning'>C</Badge>
                            <Badge variant='primary'>Ubuntu</Badge>
                            <Badge variant='danger'>Raspberry Pi</Badge>
                            <Badge variant='danger'>Linux Kernel Debugging</Badge>
                            </p>
                            <p>
                            Version Control &amp; Deployment
                            <Badge variant='warning'>Git</Badge>
                            <Badge variant='primary'>GitHub</Badge>
                            <Badge variant='danger'>Heroku</Badge>
                            </p>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}
