import { useState, useEffect } from 'react';
import API_URL from '../apiConfig';

function useDramaDetail(id) {
	const [drama, setDrama] = useState(null);

	
	useEffect((id) => {
		const getDramaDetail = async (id) => {
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
	
		getDramaDetail();
	}, [] );

	return drama;
}

export default useDramaDetail;