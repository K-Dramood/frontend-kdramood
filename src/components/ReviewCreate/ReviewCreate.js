import React from 'react';
import { Container, Button } from 'react-bootstrap';

function ReviewCreate({ drama, userInfo }) {
    return (
        <div>
            {drama.reviews.length > 0 &&
				drama.reviews.map((review) => {
					return (
						<Container
							className='m-4 p-5 border rounded-3 bg-light'
							key={review.id}>
							<h4>{review.user}</h4>
							<p>{review.body}</p>
							<small>
								Posted by: {review.owner} at{' '}
								{new Date(review.created).toLocaleString()}
							</small>
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
        </div>
    );
}

export default ReviewCreate;