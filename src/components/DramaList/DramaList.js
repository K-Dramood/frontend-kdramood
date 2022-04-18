import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import API_URL from '../../apiConfig';

function DramaList({ loggedIn }) {
    const [dramas, setDramas] = useState([]);
	const [error, setError] = useState(false);

	const getDramasList = async () => {
		try {
			setError(false);
			const response = await fetch(API_URL + 'kdramas');
			if (response.status === 200) {
				const data = await response.json();
				setDramas(data);
			} else {
				setError(true);
			}
		} catch (error) {
			setError(true);
		}

		return;
	};

	useEffect(() => {
		getDramasList();
	}, []);

	const happy = dramas.filter((drama) => {
		return drama.mood === "Happy";
	})

	const sad = dramas.filter((drama) => {
		return drama.mood === "Sad";
	})

	const inspired = dramas.filter((drama) => {
		return drama.mood === "Inspired";
	})

	const scared = dramas.filter((drama) => {
		return drama.mood === "Scared";
	})

	const adventurous = dramas.filter((drama) => {
		return drama.mood === "Adventurous";
	})

	if (!error && !dramas.length) {
		return null;
	}

	if (error && !dramas.length) {
		return <div>Oops, something went wrong! Please try again later!</div>;
	}

	return (
		<Container>
			<h2 className='m-3 d-block'>Happy</h2>
			<Row xs={1} s={2} md={4} className='m-3 border-bottom'>
					{happy.map((drama) => {
						return (
							<Col key={drama.id} className='mb-4'>
								<Link
									to={`/kdramas/${drama.id}`}
									style={{ color: 'black', textDecoration: 'none' }}>
									<Card>
										<Card.Img variant='top' src={drama.photo} />
										<Card.Body>
											<Card.Title>{drama.title}</Card.Title>
											<Card.Text>
												Number of reviews: {drama.reviews.length}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
			<h2 className='m-3 d-block'>Sad</h2>
			<Row xs={1} s={2} md={4} className='m-3 border-bottom'>
					{sad.map((drama) => {
						return (
							<Col key={drama.id} className='mb-4'>
								<Link
									to={`/kdramas/${drama.id}`}
									style={{ color: 'black', textDecoration: 'none' }}>
									<Card>
										<Card.Img variant='top' src={drama.photo} />
										<Card.Body>
											<Card.Title>{drama.title}</Card.Title>
											<Card.Text>
												Number of reviews: {drama.reviews.length}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
			<h2 className='m-3 d-block'>Inspired</h2>
			<Row xs={1} s={2} md={4} className='m-3 border-bottom'>
					{inspired.map((drama) => {
						return (
							<Col key={drama.id} className='mb-4'>
								<Link
									to={`/kdramas/${drama.id}`}
									style={{ color: 'black', textDecoration: 'none' }}>
									<Card>
										<Card.Img variant='top' src={drama.photo} />
										<Card.Body>
											<Card.Title>{drama.title}</Card.Title>
											<Card.Text>
												Number of reviews: {drama.reviews.length}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
			<h2 className='m-3 d-block'>Adventurous</h2>
			<Row xs={1} s={2} md={4} className='m-3 border-bottom'>
					{adventurous.map((drama) => {
						return (
							<Col key={drama.id} className='mb-4'>
								<Link
									to={`/kdramas/${drama.id}`}
									style={{ color: 'black', textDecoration: 'none' }}>
									<Card>
										<Card.Img variant='top' src={drama.photo} />
										<Card.Body>
											<Card.Title>{drama.title}</Card.Title>
											<Card.Text>
												Number of reviews: {drama.reviews.length}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
			<h2 className='m-3 d-block'>Scared</h2>
			<Row xs={1} s={2} md={4} className='m-3 border-bottom'>
					{scared.map((drama) => {
						return (
							<Col key={drama.id} className='mb-4'>
								<Link
									to={`/kdramas/${drama.id}`}
									style={{ color: 'black', textDecoration: 'none' }}>
									<Card>
										<Card.Img variant='top' src={drama.photo} />
										<Card.Body>
											<Card.Title>{drama.title}</Card.Title>
											<Card.Text>
												Number of reviews: {drama.reviews.length}
											</Card.Text>
										</Card.Body>
									</Card>
								</Link>
							</Col>
						);
					})}
			</Row>
			<Row className='m-5 p-5 border-top border-bottom text-center'>
                <h3 className='fw-bold'>
                    KDramas
                </h3>
                <p className='px-5'>
                    Are we missing one?
					<br></br>
					Add your favorite kdramas to our library so others can know about it and watch it too!
                </p>
				{loggedIn && (
                <Link to='/kdramas/add'>
                    <Button variant="dark" className='px-5 py-2 rounded-pill fs-5 fw-bold'>Add a KDrama</Button>
                </Link>
				)}
            </Row>

		</Container>
	);
};

export default DramaList;