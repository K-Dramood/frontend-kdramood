import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DramaForm from '../DramaForm/DramaForm';
import API_URL from '../../apiConfig';

function DramaCreate({ loggedIn }) {
    const initialDramaData = {
		title: '',
		mood: '',
		genre: '',
		synopsis: '',
		photo:'',
	};
	const navigate = useNavigate();
	const [newDrama, setNewDrama] = useState(initialDramaData);
	
	const handleChange = (event) => {
		setNewDrama((prevState) => {
			return { ...prevState, [event.target.name]: event.target.value };
		});
	};
	
	const handleFileUpload = (event) => {
		setNewDrama({ ...newDrama, photo: event.target.files[0] });
	};
	
	const createDrama = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		try {
			const response = await fetch(API_URL + 'kdramas/', {
				method: 'POST',
				body: formData,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 201) {
				navigate('/kdramas');
			}
		} catch (error) {}
	};

	return (
		<div>
			<h2>Add a KDrama</h2>
			<DramaForm
				handleSubmit={createDrama}
				handleChange={handleChange}
				handleFileUpload={handleFileUpload}
				formData={newDrama}
			/>
		</div>
	);
};


export default DramaCreate;