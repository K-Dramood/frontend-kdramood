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

	if (!error && !dramas.length) {
		return null;
	}

	if (error && !dramas.length) {
		return <div>Oops, something went wrong! Please try again later!</div>;
	}

	return (
		<Container>
			<h1>KDramas</h1>
			{loggedIn && (
				<Link to='/kdramas/add'>
					<Button className='mb-4'>Add a kdrama</Button>
				</Link>
			)}

			<Row xs={1} s={2} md={3}>
				{dramas.map((drama) => {
					return (
						<Col key={drama.id} className='mb-4'>
							<Link
								to={`/kdramas/${drama.id}`}
								style={{ color: 'black', textDecoration: 'none' }}>
								<Card>
									<Card.Img variant='top' src={drama.photo} />
									<Card.Body>
										<Card.Title>{drama.name}</Card.Title>
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
		</Container>
	);
};

export default DramaList;