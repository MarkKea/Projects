import React from 'react'

import { IoIosSearch } from 'react-icons/io'

import './events.scss'
import { Col, Row } from 'react-bootstrap'

function Events() {
    return (
			<div className='events__wrapper'>
				<h3 className='events__title'>Events happening in your city</h3>

				<Row>
					<Col md='5'>
						<input className='w-100 events__input' placeholder='Search events'/>
					</Col>

					<Col md='5'>
						<input className='w-100 events__input' placeholder='Select dates'/>
					</Col>

					<Col md='2'>
						<button className='events__button'>
							<IoIosSearch />
						</button>
					</Col>
				</Row>
			</div>
		)
}

export default Events
