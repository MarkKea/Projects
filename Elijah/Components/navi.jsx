import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Logo from './Images/logo.webp'

function Navi() {
	return (
		<Navbar expand='md' className='navi'>
			<Container fluid>
				<Navbar.Brand>
					<div className='logo'>
						<img src={Logo} className='w-100' />
					</div>
				</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Nav.Link>Style Guides</Nav.Link>
						<Nav.Link>Features</Nav.Link>
						<Nav.Link>Membership</Nav.Link>
						<Nav.Link>Tags</Nav.Link>
					</Nav>
				</Navbar.Collapse>

				<button className = 'red__button'>Sign in</button>
			</Container>
		</Navbar>
	)
}

export default Navi
