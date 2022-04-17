import { useState, useEffect } from 'react';
import API_URL from '../apiConfig';

function useDramaDetail(id) {
	const [drama, setDrama] = useState(null);

	const getDramaDetail = async () => {
		try {
			const response = await fetch(API_URL + `kdramas/${id}`);
			if (response.status === 200) {
				const data = await response.json();
				setDrama(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDramaDetail();
	}, []);

	return drama;
}

export default useDramaDetail;