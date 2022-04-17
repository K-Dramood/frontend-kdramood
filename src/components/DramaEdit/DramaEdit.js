import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DramaForm from '../DramaForm/DramaForm';
import API_URL from '../../apiConfig';

function DramaEdit(props) {
	const { id } = useParams();
	let navigate = useNavigate();
	const [formData, setFormData] = useState(null);
	
	// const getDramaDetail = async () => {
	// 	try {
	// 		const response = await fetch(API_URL + `kdramas/${id}`);
	// 		if (response.status === 200) {
	// 			const data = await response.json();
	// 			setFormData(data);
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	useEffect(() => {
		const getDramaDetail = async () => {
			try {
				const response = await fetch(API_URL + `kdramas/${id}`);
				if (response.status === 200) {
					const data = await response.json();
					setFormData(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
		getDramaDetail();
	}, [id]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		try {
			const response = await fetch(API_URL + `kdramas/${id}`, {
				method: 'PUT',
				body: formData,
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 200) {
				navigate(`/kdramas/${id}`);
			}
		} catch (error) {}
	};

	const handleChange = async (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleFileUpload = async (event) => {
		setFormData({ ...formData, photo: event.target.files[0] });
	};

	if (!formData) {
		return null;
	}

	return (
		<div>
			<h2>Edit restaurant</h2>
			<DramaForm
				handleSubmit={handleSubmit}
				handleChange={handleChange}
				handleFileUpload={handleFileUpload}
				formData={formData}
			/>
		</div>
	);
}

export default DramaEdit;