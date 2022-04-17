import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo.png';
import './Navigation.css';

function Navigation({ loggedIn, handleLogout, userInfo }) {
    return (
        <div>
            <Navbar className='border' expand='lg' collapseOnSelect={true}>
			<Container>
				<LinkContainer to='/'>
					<Navbar.Brand>
                        <img src={logo} alt="logo" className="logo" />
                    </Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-between'>
					<Nav>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/kdramas'>
							<Nav.Link>K-Dramas</Nav.Link>
						</LinkContainer>
					</Nav>
					<Nav>
						{userInfo && (
							<Navbar.Text className='justify-content-end'>
								You are signed in as: {userInfo.username}
							</Navbar.Text>
						)}
						{loggedIn ? (
							<>
								<LinkContainer to='/'>
									<Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
								</LinkContainer>
							</>
						) : (
							<>
								<LinkContainer to='/signup'>
									<Nav.Link>Sign Up</Nav.Link>
								</LinkContainer>
								<LinkContainer to='/login'>
									<Nav.Link>Log In</Nav.Link>
								</LinkContainer>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
        </div>
    );
}

export default Navigation;