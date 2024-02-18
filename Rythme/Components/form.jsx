import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Form() {
    return (
			<form className='column10'>
				<Row className = 'g-3'>
                    <Col lg = '12' sm = '12'>
                        <input type='text' className='w-100 contact__input input' placeholder='Name'/>
                    </Col>

					<Col lg = '6' md = '6' sm = '12'>
						<input type='text' className='w-100 contact__input input' placeholder='Phone'/>
					</Col>

					<Col lg = '6' md = '6' sm = '12'>
						<input type='text' className='w-100 contact__input input' placeholder='Email'/>
					</Col>

                    <Col lg = '12' sm = '12'>
                        <input type='text' className='w-100 contact__input input' placeholder='Subject'/>
                    </Col>

                    <Col lg = '12' sm = '12'>
                        <textarea className = 'w-100 contact__input input' placeholder='Message'></textarea>
                    </Col>

                    <Col lg = '12' sm = '12'>
                        <button className = 'default__button w-100'>Send</button>
                    </Col>
				</Row>
			</form>
		)
}

export default Form
