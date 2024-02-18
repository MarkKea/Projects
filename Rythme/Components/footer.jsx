import React from 'react'
import Rythme from './Images/rythme.png'
import { Col, Container, Row } from 'react-bootstrap'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'

function Footer() {
    return (
			<div className='footer darkbg'>
				<Container fluid>
					<div className='footer__list'>
						<Row className='g-2'>
							<Col lg='3' md='6' sm='12'>
								<h6 className='footer__title fs11em'>Our Page</h6>
								<ul>
									<li className='footer__list__item'>About</li>
									<li className='footer__list__item'>Our Team</li>
									<li className='footer__list__item'>Our Event</li>
									<li className='footer__list__item'>Blog & News</li>
								</ul>
							</Col>

							<Col lg='3' md='6' sm='12'>
								<h6 className='footer__title fs11em'>Our Class</h6>
								<ul>
									<li className='footer__list__item'>Private Lesson</li>
									<li className='footer__list__item'>Preschool Class</li>
									<li className='footer__list__item'>Schooler Class</li>
									<li className='footer__list__item'>Teenage Class</li>
								</ul>
							</Col>

							<Col lg='3' md='6' sm='12'>
								<h6 className='footer__title fs11em'>Quick Link</h6>
								<ul>
									<li className='footer__list__item'>Faq</li>
									<li className='footer__list__item'>Contact</li>
									<li className='footer__list__item'>Community</li>
									<li className='footer__list__item'>Terms & Condition</li>
								</ul>
							</Col>

							<Col lg='3' md='6' sm='12'>
								<h6 className='footer__title fs11em'>Our Page</h6>
								<p className='footer__text'>
									Lorem ipsum dolor sit amet, consectetur.
								</p>

								<div className='column10'>
									<input className='footer__input input' placeholder='Email' />
									<button className='default__button'>Send</button>
								</div>
							</Col>
						</Row>
					</div>

					<div className='footer__links'>
						<div className='footer__icon'>
							<FaFacebook />
						</div>

						<div className='footer__icon'>
							<FaTwitter />
						</div>

						<div className='footer__icon'>
							<FaInstagram />
						</div>

						<div className='footer__icon'>
							<FaYoutube />
						</div>
					</div>

					<div className='text-center'>
						<p className='footer__text'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
							tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
						</p>

						<div className='footer__image'>
							<img src={Rythme} className='w-25' />
						</div>
					</div>
				</Container>
			</div>
		)
}

export default Footer
