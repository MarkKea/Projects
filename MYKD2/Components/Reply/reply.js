import { Col, Row } from 'react-bootstrap'
import './reply.scss'

function Reply(){
    return (
			<div className='reply'>
				<h3 className='reply__title'>Leave a Reply</h3>

				<p className='reply__text'>
					Email address will not be published. Required fields are marked *
				</p>

				<Row>
					<Col xl='6' md='6' sm='6'>
						<div>
							<input type='text' className='reply__input' placeholder='Name*' />
						</div>
					</Col>

					<Col xl='6' md='6' sm='6'>
						<div>
							<input type='text' className='reply__input' placeholder='Email*' />
						</div>
					</Col>

					<Col xl='12' md='12' sm='12'>
						<textarea className = 'reply__textarea' placeholder='Comment*'></textarea>
					</Col>
				</Row>

                <button className = 'reply__button'>Post Comment</button>
			</div>
		)
}

export default Reply