import { Col, Container, Row } from 'react-bootstrap'
import './footer.scss'

import Logo from '../Images/logo.png'

function Footer() {
	return (
		<Container fluid>
			<footer className='footer'>
				<Row>
					<Col xl='4' lg='4' md='12' sm='12'>
						<div className='footer__content'>
							<img src={Logo} className='w-75' />
							<p className='footer__text'>
								Lorem ipsum dolor sitamet consectur adipiscing Duis esollici
								tudin augue euismod. Nulla ullam dolor sitamet consectetur
							</p>

							<h1 className='footer__contact__title'>
								ACTIVE <span>WITH US</span>
							</h1>
						</div>
					</Col>

					<Col xl='2' lg='2' md='6' sm='6'>
						<div className='footer__content'>
							<h1 className='footer__header'>Quick Link</h1>

							<ul className='footer__ul'>
								<li className='footer__list'>Gaming</li>
								<li className='footer__list'>Product</li>
								<li className='footer__list'>All NFTs</li>
								<li className='footer__list'>Social Network</li>
								<li className='footer__list'>Domain Network</li>
								<li className='footer__list'>Collectibles</li>
							</ul>
						</div>
					</Col>

					<Col xl='2' lg='2' md='6' sm='6'>
						<div className='footer__content'>
							<h1 className='footer__header'>Supports</h1>

							<ul className='footer__ul'>
								<li className='footer__list'>Setting & Privacy</li>
								<li className='footer__list'>Help & Support</li>
								<li className='footer__list'>Live Auctions</li>
								<li className='footer__list'>Item Details</li>
								<li className='footer__list'>24/7 Supports</li>
								<li className='footer__list'>Our News</li>
							</ul>
						</div>
					</Col>

					<Col xl='4' lg='4' md='12' sm='12'>
						<div className='footer__content'>
							<h1 className='footer__header'>Newsletter</h1>
							<p className='footer__text'>
								Subscribe our newsletter to get our latest update &
								newsconsectetur
							</p>

							<div>
								<input
									className='footer__input'
									placeholder='Your email address'
								/>
								<button className='footer__button'>p</button>
							</div>
						</div>
					</Col>
				</Row>
			</footer>
		</Container>
	)
}

export default Footer
