import React from 'react'

import { IoShareSocialOutline } from 'react-icons/io5'
import { IoMdMore } from 'react-icons/io'

import './cards.scss'
import { Col, Row } from 'react-bootstrap'

import card1 from '../Images/card1.jpg'
import card2 from '../Images/card2.jpg'
import card3 from '../Images/card3.jpg'
import card4 from '../Images/card4.jpg'
import card5 from '../Images/card5.jpg'
import card6 from '../Images/card6.jpg'
import card7 from '../Images/card7.jpg'
import card8 from '../Images/card8.jpg'

function Cards() {
    const ArrayOfCards = [
        {
            id: 1,
            image: card1,
            type: 'Ludhiana'
        },
        {
            id: 2,
            image: card2,
            type: 'Online'
        },
        {
            id: 3,
            image: card3,
            type: 'Location'
        },
        {
            id: 4,
            image: card4,
            type: 'Online'
        },
        {
            id: 5,
            image: card5,
            type: 'Online'
        },
        {
            id: 6,
            image: card6,
            type: 'Online'
        },
        {
            id: 7,
            image: card7,
            type: 'Location'
        },
        {
            id: 8,
            image: card8,
            type: 'Location'
        }
    ]

    return (
			<>
				<Row>
					{ArrayOfCards.map(ArrayOfCard => (
						<Col key={ArrayOfCard.id} lg='6' sm='12'>
							<div className='cards__item'>
								<div className='cards__image'>
									<img src={ArrayOfCard.image} className='w-100' />
									<div className='cards__image__block'><IoMdMore /></div>
								</div>

								<div className='cards__content'>
									<span className='cards__date'>THU,30 JUNE 2022 AT 3.00 PM</span>
									<h4 className='cards__title' href='#'>Event Title Here</h4>
									<span className='cards__text'>{ArrayOfCard.type}</span>

									<div className='cards__status'>
										<span className='cards__text'>25 Interested</span>
										<span className='cards__text'>11 Going</span>
									</div>

									<div className='cards__buttons'>
										<button className='cards__button w-75'>Interested</button>
										<button className='cards__button w-25'><IoShareSocialOutline /></button>
									</div>
								</div>
							</div>
						</Col>
					))}
				</Row>

                <div className = 'text-center'>
                    <button className = 'orange__button'>Loading...</button>
                </div>
			</>
		)
}

export default Cards
