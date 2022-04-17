import { Form, Button, Alert } from 'react-bootstrap';

function DramaForm ({
	handleSubmit,
	formData,
	handleChange,
	handleFileUpload,
	error,
}) {
	return (
		<div className='w-75 p-3'>
			<Form onSubmit={handleSubmit} encType='multipart/form-data'>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						required
						autoFocus
						type='text'
						name='title'
						onChange={handleChange}
						value={formData.title}
					/>
				</Form.Group>
				<Form.Group controlId='mood'>
					<Form.Label>Mood</Form.Label>
					<Form.Control
						required
						type='text'
						name='mood'
						onChange={handleChange}
						value={formData.mood}
					/>
				</Form.Group>
                <Form.Group controlId='genre'>
					<Form.Label>Genre</Form.Label>
					<Form.Control
						required
						type='text'
						name='genre'
						onChange={handleChange}
						value={formData.genre}
					/>
				</Form.Group>
                <Form.Group controlId='synopsis'>
					<Form.Label>Synopsis</Form.Label>
					<Form.Control
						required
						type='text'
						name='synopsis'
						onChange={handleChange}
						value={formData.synopsis}
					/>
				</Form.Group>
				<Form.Group controlId='photo'>
					<Form.Label>Photo</Form.Label>
					<Form.Control
						multiple
						type='file'
						name='photo'
						accept='image/*'
						onChange={handleFileUpload}></Form.Control>
				</Form.Group>

				<Button className='mt-4' type='submit' disabled={error}>
					Submit
				</Button>
				{error && (
					<Alert variant='danger'>
						Oops, something went wrong! Please try again!
					</Alert>
				)}
			</Form>
		</div>
	);
};

export default DramaForm;