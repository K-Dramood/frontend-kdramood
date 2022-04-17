import React from 'react';
import { Row, Container, Image, Button, Col, CardGroup, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import homeImg from '../../images/default.jpg';
import inspired from '../../images/inspired.png';
import adventurous from '../../images/adventurous.png';
import happy from '../../images/happy.png';
import sad from '../../images/sad.png';
import scared from '../../images/scared.png';
import tfto from '../../images/2521.jpeg';
import bp from '../../images/bp.jpeg';
import pachinko from '../../images/pachinko.jpeg';
import './Home.css';
import SignUp from '../SignUp/SignUp';

function Home() {
    return (
        <div>
            {/* Top Header */}
            <Container className='mx-5 p-5 border-bottom'>
                <Row className='p-4'>
                    <Col className='headerText'>
                        <h1>K-DraMood</h1>
                        <h2>K-Drama recommendations based on mood</h2>
                        <p>Korean Dramas are well known for their ability to tug at the heart strings and incite strong emotions from viewers. If you're not sure which kdrama adventure you want to take next, look no further. Find out which kdrama is the one based on the mood you want to end up in.</p>
                        <Button variant="dark" className='me-4 rounded-pill' href='#moods'>
                            Find The One
                        </Button>
                        <Link to='/kdramas'>
                            <Button variant="outline-secondary" className='rounded-pill'>
                                Kdramas Full List
                            </Button>
                        </Link>
                    </Col>
                    <Col>
                        <Image
                            rounded
                            // fluid
                            src={homeImg}
                            border
                            height='300vh'
                        />
                    </Col>
                </Row>
            </Container>

            {/* KDrama Generator by Mood */}
            <Container id='moods' className='m-4 p-5 border-bottom'>
                <Row className='px-5'>
                    <Col className="text-center">
                            <Image
                                className='mx-auto d-block'
                                src={inspired}
                            />
                            <Button variant="info" className='mt-4'>
                                Inspired
                            </Button>
                    </Col>
                    <Col className="text-center">
                        <h3 className='fw-bold'>I Want To Feel...</h3>
                        <p className='px-5'>Choose which mood you want to feel by the end of the kdrama.</p>
                    </Col>
                    <Col className="text-center">
                        <Image
                            className='mx-auto d-block'
                            src={adventurous}
                        />
                        <Button variant="info" className='mt-4'>
                            Adventurous
                        </Button>
                    </Col>
                </Row>
                <Row className='p-5'>
                    <Col className="text-center">
                        <Image
                            className='mx-auto d-block'
                            src={happy}
                        />
                        <Button variant="info" className='mt-4'>
                            Happy
                        </Button>
                    </Col>
                    <Col className="text-center">
                        <Image
                            className='mx-auto d-block'
                            src={sad}
                        />
                        <Button variant="info" className='mt-4'>
                            Sad
                        </Button>
                    </Col>
                    <Col className="text-center">
                        <Image
                            className='mx-auto d-block'
                            src={scared}
                        />
                        <Button variant="info" className='mt-4'>
                            Scared
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* Top KDramas */}
            <div className='m-5 px-5 text-center d-block'>
                <h3 className='fw-bold'>
                    Top K-dramas
                </h3>
                <p>
                    See what is trending and what others are watching right now.
                </p>
            </div>
            <CardGroup className='m-5 px-5'>
                <Card className='mx-5 rounded'>
                    <Card.Img variant="top" src={tfto} />
                    <Card.Body>
                        <Card.Title>Twenty Five Twenty One</Card.Title>
                        <Card.Text>
                            In a time when dreams seem out of reach, a teen fencer pursues big ambitions and meets a hardworking young man who seeks to rebuild his life.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Genre: Drama, Romance</small>
                    </Card.Footer>
                </Card>
                <Card className='mx-5 rounded border'>
                    <Card.Img variant="top" src={bp} />
                    <Card.Body>
                        <Card.Title>A Business Proposal</Card.Title>
                        <Card.Text>
                            In disguise as her friend, Ha-ri shows up to a blind date to scare him away. But plans go awry when he turns out to be her CEO - and makes a proposal.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Genre: Comedy, Drama, Romance</small>
                    </Card.Footer>
                </Card>
                <Card className='mx-5 border rounded'>
                    <Card.Img variant="top" src={pachinko} />
                    <Card.Body>
                        <Card.Title>Pachinko</Card.Title>
                        <Card.Text>
                            Based on the New York Times bestseller, this sweeping saga chronicles the hopes and dreams of a Korean immigrant family across four generations as they leave their homeland in an indomitable quest to survive and thrive.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Genre: Drama</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            {/* Sign Up */}
            <div className='m-5 p-5 border-top border-bottom text-center'>
                <h3 className='fw-bold'>
                    Join The Community
                </h3>
                <p className='px-5'>
                    Want to join the K-Dramood family? Sign up to write your own reviews and add to our list of kdramas.
                </p>
                <Link to='/signup'>
                    <Button variant="dark" className='px-5 py-2 rounded-pill fs-5 fw-bold'>Sign Up</Button>
                </Link>
            </div>
        </div>
    );
}

export default Home;