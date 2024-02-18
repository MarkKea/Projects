import { Container, Row, Col } from 'react-bootstrap'

import { motion } from 'framer-motion'

function Footer(){
    return (
			<Container fluid>
				<div className='footer'>
					<Container>
						<Row>
							<Col xl='3' md='3' sm='6'>
								<motion.ul
									class='footer__list'
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<h2 className='footer__list__title'>Quick Links</h2>
									<li class='footer__list__item'>Archive Page</li>
									<li class='footer__list__item'>Contact Page</li>
									<li class='footer__list__item'>Signin Page</li>
									<li class='footer__list__item'>Signup Page</li>
									<li class='footer__list__item'>Free Account Page</li>
									<li class='footer__list__item'>Paid Account Page</li>
								</motion.ul>
							</Col>

							<Col xl='3' md='3' sm='6'>
								<motion.ul
									class='footer__list'
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<h2 className='footer__list__title'>Tags</h2>
									<li class='footer__list__item'>Idea</li>
									<li class='footer__list__item'>Business</li>
									<li class='footer__list__item'>Story</li>
									<li class='footer__list__item'>News</li>
									<li class='footer__list__item'>Lifestyle</li>
									<li class='footer__list__item'>Fashion</li>
								</motion.ul>
							</Col>

							<Col xl='6' md='6' sm='12'>
								<motion.div
									className='footer__form'
									initial={{ opacity: 0, x: -100 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ duration: 0.5 }}
								>
									<h2 className='footer__form__title'>
										Join the newsletter and read the new post first.
									</h2>

									<p className='footer__form__text'>
										Get the email newsletter and unlock access to members-only
										contents
									</p>

									<div className='footer__form__input'>
										<input
											type='text'
											className='w-100'
											placeholder='Email Address'
										/>
										<button className='footer__form__button'>Subscribe</button>
									</div>
								</motion.div>
							</Col>
						</Row>
					</Container>
				</div>
			</Container>
		)
}

export default Footer