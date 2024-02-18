import { Col, Container, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'

function Main(){
    return (
			<Container>
				<div className='main'>
					<motion.h1
						className='main__title'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						In depth resource on UI, UX and everything in between.
					</motion.h1>

					<Row>
						<Col xl='6' md='6' sm='12'>
							<motion.p
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								Get the email newsletter and unlock access to members-only
								content and updates Elijah is a modern classic blog theme for
								Ghost.
							</motion.p>
						</Col>

						<Col xl='6' md='6' sm='12'>
							<motion.div
								className='main__form'
								initial={{ opacity: 0, x: -100 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5 }}
							>
								<input
									type='text'
									className='main__input w-100'
									placeholder='Email Address'
								/>
								<button className='main__button'>Subscribe</button>
							</motion.div>
						</Col>
					</Row>
				</div>
			</Container>
		)
}
export default Main 