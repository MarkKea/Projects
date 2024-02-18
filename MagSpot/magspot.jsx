import { Col, Container, Row } from 'react-bootstrap'
import './magspot.scss'

import { useState } from 'react'

import News from './Components/news'
import Reviews from './Components/reviews'
import Gadgets from './Components/gadgets'
import Laptops from './Components/laptops'
import Posts from './Components/posts'
import Videos from './Components/videos'
import Consoles from './Components/consoles'
import Mobile from './Components/mobile'
import Cars from './Components/cars'
import Follow from './Components/follow'
import Popular from './Components/popular'
import Travel from './Components/travel'
import Form from './Components/form'
import Comments from './Components/comments'
import Categories from './Components/categories'
import Tags from './Components/tags'
import Footer from './Components/footer'

import Logo from './Components/Images/logo.png'
import Dark_logo from './Components/Images/dark__logo.png'

import { GiHamburgerMenu } from 'react-icons/gi'
import { FaSearch } from 'react-icons/fa'
import { FaMoon } from 'react-icons/fa'
import { FaSun } from 'react-icons/fa'

function Magspot(){
	const [hide, setHide] = useState(false)
	const handleHide = () => {
		setHide(!hide)
	}
	
	const [dark, setDark] = useState(false)
	const handleDark = () => {
		setDark(!dark)
	}

    return (
			<div className={dark ? 'dark' : 'white'}>
				<div className='body'>
					<div className='wrapper' style={{ margin: 0 }}>
						<Container fluid>
							<div className='nav'>
								<div className='nav__flex'>
									<div className='hamburger'>
										<div className='icon' onClick={handleHide}>
											<i>
												<GiHamburgerMenu />
											</i>
										</div>
									</div>

									<div className='logo'>
										<img src={dark ? Logo : Dark_logo} className='w-100' />
									</div>

									<ul className={hide ? 'hide__list' : 'nav__list'}>
										<li className='nav__item'>Home</li>
										<li className='nav__item'>Features</li>
										<li className='nav__item'>Mega Menu</li>
										<li className='nav__item'>Mega Tabs</li>
										<li className='nav__item'>Typography</li>
										<li className='nav__item'>Shortcodes</li>
									</ul>
								</div>

								<div className='nav__icons'>
									<div className='icon'>
										<i>
											<FaSearch />
										</i>
									</div>
									<div className='icon' onClick={handleDark}>
										<i>{dark ? <FaSun /> : <FaMoon />}</i>
									</div>
								</div>
							</div>
						</Container>
					</div>

					<Container fluid>
						<Row>
							<Col xl='9' md='12' sm='12'>
								<News />
								<Reviews />

								<Row>
									<Col xl='6' md='6' sm='12'>
										<Gadgets />
									</Col>

									<Col xl='6' md='6' sm='12'>
										<Laptops />
									</Col>
								</Row>

								<Posts />
								<Videos />
								<Consoles />
								<Mobile />
								<Cars />
							</Col>

							<Col xl='3' md='12' sm='12'>
								<Follow />
								<Popular />
								<Travel />
								<Form />
								<Comments />
								<Categories />
								<Tags />
							</Col>
						</Row>

						<Footer />
						<div className='magspot__down'>
							<Row className = 'g-2'>
								<Col md='6' sm='12'>
									<h3 className='title'>Design by - Pro Blogger Templates</h3>
								</Col>

								<Col md='6' sm='12'>
									<div className='magspot__down__flex'>
										<h3 className='title'>Home</h3>
										<h3 className='title'>About Us</h3>
										<h3 className='title'>Privacy Policy</h3>
										<h3 className='title'>Contact Us</h3>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
			</div>
		)
}

export default Magspot