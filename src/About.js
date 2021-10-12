import React from 'react';
import { Card, Accordion, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <Accordion className='mt-3' defaultActiveKey='0'>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle
                            as={Card.Header}
                            variant='link'
                            eventKey='0'>
                            <b>Hello, I'm Wonkeun!</b>
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
                            <b>Latest Projects</b>
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
                                            Airbnb Clone{'  '}
                                            <Badge variant='primary'>New</Badge>
                                        </h6>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey='2'>
                                        <Card.Body>
                                            Airbnb clone full stack website
                                            using Node.js, MongoDB, Heroku. Used
                                            handlebars to template front-end and
                                            a com bination of pure CSS and
                                            Bootstrap. User input validation,
                                            user authentication, admin/user
                                            authorization, data object CRUD
                                            operations are implemented.
                                            <br />
                                            <a href='https://github.com/Genne23v/Airbnb_clone'>
                                                GitHub Link
                                            </a>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>

                                <Card>
                                    <Accordion.Toggle
                                        as={Card.Header}
                                        eventKey='3'>
                                        <h6>
                                            Travel Post{'  '}
                                            <Badge variant='primary'>New</Badge>
                                        </h6>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey='3'>
                                        <Card.Body>
                                            Travel front-end page inspired by
                                            world travellers. Pure HTML & CSS
                                            webpage using SmoothScroll and
                                            OwlCarousel libraries.
                                            <br />
                                            <a href='https://github.com/Genne23v/WK-Travel-Post'>
                                                GitHub Link
                                            </a>
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
                                        <Card.Body>
                                            Scheduler app using React, Bootstrap
                                            and Tailwind CSS <br />
                                            <a href='https://github.com/Genne23v/react-scheduler'>
                                                GitHub Link
                                            </a>
                                        </Card.Body>
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
                            <b>Tech Stack That I Use &amp; Interests</b>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey='5'>
                        <Card.Body>
                            <ul>
                                <li>
                                    Web Development{'  '}
                                    <Badge variant='primary'>HTML</Badge>{' '}
                                    <Badge variant='danger'>CSS</Badge>{' '}
                                    <Badge variant='warning'>JavaScript</Badge>{' '}
                                    <Badge variant='success'>Node.js</Badge>{' '}
                                    <Badge variant='info'>React.js</Badge>{' '}
                                    <Badge variant='primary'>Bootstrap</Badge>{' '}
                                    <Badge variant='secondary'>SASS</Badge>{' '}
                                    <Badge variant='primary'>
                                        Visual Studio Code
                                    </Badge>
                                </li>
                                <li>
                                    Object Oriented Programming{'  '}
                                    <Badge variant='primary'>C++</Badge>{' '}
                                    <Badge variant='info'>Java</Badge>{' '}
                                    <Badge variant='warning'>UML</Badge>{' '}
                                    <Badge variant='secondary'>
                                        Visual Studio
                                    </Badge>{' '}
                                    <Badge variant='dark'>Eclipse</Badge>
                                </li>
                                <li>
                                    Linux/Unix and Embedded Programming{'  '}
                                    <Badge variant='primary'>C</Badge>{' '}
                                    <Badge variant='danger'>Ubuntu</Badge>{' '}
                                    <Badge variant='dark'>
                                        Linux Kernel Debugging
                                    </Badge>{' '}
                                    <Badge variant='danger'>Raspberry Pi</Badge>
                                </li>
                                <li>
                                    Version Control &amp; Deployment{'  '}
                                    <Badge variant='danger'>Git</Badge>{' '}
                                    <Badge variant='dark'>GitHub</Badge>{' '}
                                    <Badge variant='secondary'>Heroku</Badge>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    );
}
