import React from 'react'

import { IoIosSunny } from 'react-icons/io'
import { MdOutlineDateRange } from 'react-icons/md'

import './explore.scss'
import { Col, Row } from 'react-bootstrap'

function Explore() {    
    return (
			<div className='explore__wrapper'>
				<h4 className='explore__title'>Explore Events</h4>

				<Row className='g-2'>
					<Col lg='6' sm='6'>
						<div className='explore__item explore__item1'>
							<div className = 'explore__icon'><IoIosSunny /></div>
							<span className='explore__text'>Today</span>
						</div>
					</Col>

					<Col lg='6' sm='6'>
						<div className='explore__item explore__item2'>
                            <div className = 'explore__icon'><IoIosSunny /></div>
							<span className='explore__text'>Tomorrow</span>
						</div>
					</Col>

					<Col lg='6' sm='6'>
						<div className='explore__item explore__item3'>
                            <div className = 'explore__icon'><MdOutlineDateRange /></div>
							<span className='explore__text'>This week</span>
						</div>
					</Col>

					<Col lg='6' sm='6'>
						<div className='explore__item explore__item4'>
                            <div className = 'explore__icon'><MdOutlineDateRange /></div>
							<span className='explore__text'>Choose Date</span>
						</div>
					</Col>
				</Row>
			</div>
		)
}

export default Explore
