import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { IoMapOutline } from 'react-icons/io5'
import { IoMailOpenOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import Form from './form'

function Contact() {
    return (
			<div className='wrapper'>
				<Container fluid>
					<div className = 'contact darkbg'>
						<Row className = 'g-3'>
							<Col lg='6' md='12'>
								<div className = 'column10'>
                                    <h4 className='uptitle'>Contact Us</h4>
								    <h1 className='title'>Get Closer With Us</h1>
								    <p className = 'contact__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibusleo.</p>

                                    <div className = 'contact__item'>
                                        <i><IoMapOutline /></i>
                                        <p className = 'contact__text'>2nd Ronggowarsito Street, pekanbaru, riau, 28290</p>
                                    </div>

                                    <div className = 'contact__item'>
                                        <i><IoMailOpenOutline /></i>
                                        <p  className = 'contact__text'>Support@awesomesite.com</p>
                                    </div>

                                    <div className = 'contact__item'>
                                        <i><FiPhoneCall /></i>
                                        <p  className = 'contact__text'>(123) 456 789 444</p>
                                    </div>     
                                </div>                               
							</Col>

							<Col lg='6' md='12'>
                                <Form />
                            </Col>
						</Row>
					</div>
				</Container>
			</div>
		)
}

export default Contact
