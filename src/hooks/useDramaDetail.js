import { useState, useEffect } from 'react';
import API_URL from '../apiConfig';

function useDramaDetail(id) {
	const [drama, setDrama] = useState(null);
	const kdramaId = id

	useEffect(() => {
		const getDramaDetail = async () => {
			try {
				const response = await fetch(API_URL + `kdramas/${kdramaId}`);
				if (response.status === 200) {
					const data = await response.json();
					setDrama(data);
				}
			} catch (error) {
				console.log(error);
			}
		};
	
		getDramaDetail();
	}, [kdramaId] );

	return drama;
}

export default useDramaDetail;