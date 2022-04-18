import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Image, Button, Row } from 'react-bootstrap';
import useDramaDetail from '../../hooks/useDramaDetail';
import API_URL from '../../apiConfig';

function DramaDetail({ userInfo, loggedIn }) {
    let navigate = useNavigate();
	const { id } = useParams();
	const drama = useDramaDetail(id);

	const handleDelete = async (event) => {
		const confirm = window.confirm('Are you sure you want to delete?');

		if (confirm) {
			try {
				const response = await fetch(API_URL + `kdramas/${id}`, {
					method: 'DELETE',
					headers: {
						Authorization: `Token ${localStorage.getItem('token')}`,
					},
				});

				if (response.status === 204) {
					navigate('/kdramas');
				}
			} catch (error) {
				console.log(error);
			}
		}
	};

	if (!drama) {
		return null;
	}

	return (
		<Container className='p-5 border rounded-3 bg-light'>
			<div className='d-flex justify-content-center'>
				<Image rounded width='35%' className='mx-5 px-5 d-flex' src={drama.photo} />
				<div className='m-5 pe-5'>
					<h2>{drama.title}</h2>
					<br />
					<h4>Mood: {drama.mood}</h4>
					<h4>Genre: {drama.genre}</h4>
					<br />
					<h5>{drama.synopsis}</h5>
				</div>
				
				{userInfo && userInfo.username === drama.user && (
					<div>
						<Link
							to={`/kdramas/${drama.id}/edit`}
							className='btn btn-secondary'>
							Edit
						</Link>
						<Button onClick={handleDelete} variant='danger'>
							Delete
						</Button>
					</div>
				)}
			</div>
			
			<Row>
				<h2 className='mt-4 text-center'>Reviews: </h2>
				{!drama.reviews.length && <p className='text-center'>No reviews yet!</p>}
				{drama.reviews.length > 0 &&
					drama.reviews.map((review) => {
						return (
							<Container
								className='m-4 p-5 border rounded-3 bg-light'
								key={review.id}>
								<h4>Posted by: {review.user}</h4>
								<small>
									at{' '}
									{new Date(review.created).toLocaleString()}
								</small>
								<p>{review.body}</p>
								{userInfo && userInfo.username === review.user && (
									<div>
										<Button variant='secondary' className='m-4'>
											Edit
										</Button>
										<Button variant='danger'>Delete</Button>
									</div>
								)}
							</Container>
						);
					})}
			</Row>
			<Row className='m-5 p-5 border-top border-bottom text-center'>
                <h3 className='fw-bold'>
                    Write a Review
                </h3>
                <p className='px-5'>
                    Let us know what your thoughts were after watching.
					<br></br>
					Did you agree with the mood classification for this kdrama? If not, tell us here!
                </p>
				{loggedIn && (
                <Link to='/reviews/add'>
                    <Button variant="dark" className='px-5 py-2 rounded-pill fs-5 fw-bold'>Comment</Button>
                </Link>
				)}
            </Row>
			
		</Container>
	);
};

export default DramaDetail;