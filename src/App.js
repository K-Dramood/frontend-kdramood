import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import DramaDetail from './components/DramaDetail/DramaDetail';
import ReviewCreate from './components/ReviewCreate/ReviewCreate';
import ReviewForm from './components/ReviewForm/ReviewForm';
import DramaList from './components/DramaList/DramaList';
import './App.css';
import API_URL from './apiConfig';

function App() {
	let navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useState(false);
	const [userInfo, setUserInfo] = useState(null);

	const handleSetLoggedIn = (token) => {
		localStorage.setItem('token', token);
		setLoggedIn(true);
		getUserInfo();
	};

	const getUserInfo = async () => {
		try {
			const response = await fetch(API_URL + 'users/me/', {
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});
			if (response.status === 200) {
				const data = await response.json();
				setUserInfo(data);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleLogout = async () => {
		try {
			const response = await fetch(API_URL + 'token/logout/', {
				method: 'POST',
				headers: {
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			});

			if (response.status === 204) {
				setLoggedIn(false);
				setUserInfo(null);
				localStorage.removeItem('token');
				alert('You have been logged out!');
				navigate('/');
			}
		} catch (error) {
			console.log(error);
		}
		return;
	};

	useEffect(() => {
		if (localStorage.getItem('token')) {
			setLoggedIn(true);
			getUserInfo();
		}
	}, []);


	return (
		<div>
			<Navigation
				loggedIn={loggedIn}
				handleLogout={handleLogout}
				userInfo={userInfo}
			/>
			<main>
				<Container>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route
							path='/login'
							element={<Login handleSetLoggedIn={handleSetLoggedIn} />}
						/>
						<Route path='/signup' element={<SignUp />} />
						<Route
							path='/reviews/new'
							element={<ReviewCreate loggedIn={loggedIn} />}
						/>
						<Route
							path='/kdramas'
							element={<DramaList loggedIn={loggedIn} />}
						/>
						<Route
							path='/kdramas/:id'
							element={
								<DramaDetail userInfo={userInfo} loggedIn={loggedIn} />
							}
						/>
						<Route path='/reviews/:id/edit' element={<ReviewForm />} />
					</Routes>
				</Container>
			</main>

			{/* Footer */}
			<Container className='d-flex align-content-end'>
				<div className='d-flex justify-content-between'>
					<p>© Michelle McPherson 2022</p>
					<div>
						<a className='me-3' href="https://github.com/michellechoi126"><i className="fs-2 text-dark fab fa-github-square"></i></a>
						<a className='me-3' href="https://www.linkedin.com/in/michellemcpherson126/"><i className="fs-2 text-dark fab fa-linkedin"></i></a>
					</div>
				</div>
			</Container>
            
    </div>
	);
}

export default App;
