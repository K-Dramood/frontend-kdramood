import { useParams, Link, useNavigate } from 'react-router-dom';
import { Container, Image, Button } from 'react-bootstrap';
import useDramaDetail from '../../hooks/useDramaDetail';
import API_URL from '../../apiConfig';
import ReviewCreate from '../ReviewCreate/ReviewCreate';

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
			<div className='d -flex justify-content-between'>
				<div>
					<h2>{drama.name}</h2>
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
			<h3>Mood: {drama.mood}</h3>
			<Image rounded fluid src={drama.photo} />
			<h2 className='mt-4'>Reviews: </h2>
			{!drama.reviews.length && <p>No reviews yet!</p>}
			{loggedIn && <Button className='mb-5'>Write a review</Button>}
			<ReviewCreate userInfo={userInfo} drama={drama}/>
		</Container>
	);
};

export default DramaDetail;