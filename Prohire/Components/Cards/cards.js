import { Col, Row } from 'react-bootstrap'
import './cards.scss'

import CardsBig1 from '../Images/cardsbig1.jpg'
import CardsMini1 from '../Images/cardsmini1.jpg'
import CardsBig2 from '../Images/cardsbig2.jpg'
import CardsMini2 from '../Images/cardsmini2.jpg'
import CardsBig3 from '../Images/cardsbig3.jpg'
import CardsMini3 from '../Images/cardsmini3.jpg'
import CardsBig4 from '../Images/cardsbig4.jpg'
import CardsMini4 from '../Images/cardsmini4.jpg'
import CardsBig5 from '../Images/cardsbig5.jpg'
import CardsMini5 from '../Images/cardsmini5.jpg'
import CardsBig6 from '../Images/cardsbig6.jpg'
import CardsMini6 from '../Images/cardsmini6.jpg'
import CardsBig7 from '../Images/cardsbig7.jpg'
import CardsMini7 from '../Images/cardsmini7.jpg'
import CardsBig8 from '../Images/cardsbig8.jpg'
import CardsMini8 from '../Images/cardsmini8.jpg'
import CardsBig9 from '../Images/cardsbig9.jpg'
import CardsMini9 from '../Images/cardsmini9.jpg'

function Cards(){
    const ArrayOfCards = [
			{
				id: 1,
				image: CardsBig1,
				author__image: CardsMini1,
				author__name: 'Nancy Reyes',
				text: 'I will do wix website design, wix website redesign or redesign wix website',
				footer__price: '$10.00',
			},
			{
				id: 2,
				image: CardsBig2,
				author__image: CardsMini2,
				author__name: 'Maria Mae',
				text: 'I will do website and landing page UI UX design in figma, xd format',
				footer__price: '$13.00',
			},
			{
				id: 3,
				image: CardsBig3,
				author__image: CardsMini3,
				author__name: 'Alex Embroce',
				text: 'I will do responsive business wordpress website design or build ecommerce',
				footer__price: '$11.00',
			},
			{
				id: 4,
				image: CardsBig4,
				author__image: CardsMini4,
				author__name: 'Johnny Mars',
				text: 'I will design a professional responsive website for your business',
				footer__price: '$09.00',
			},
			{
				id: 5,
				image: CardsBig5,
				author__image: CardsMini5,
				author__name: 'Designer Hub',
				text: 'I will do website ui ux, web app ux ui design, creative ui design',
				footer__price: '$11.00',
			},
			{
				id: 6,
				image: CardsBig6,
				author__image: CardsMini6,
				author__name: 'Tommy Yong',
				text: 'I will install elementor pro, astra pro, divi theme, wp rocket, chocoblock plugin',
				footer__price: '$14.00',
			},
			{
				id: 7,
				image: CardsBig7,
				author__image: CardsMini7,
				author__name: 'Molina De',
				text: 'I will build and design a wordpress website using divi, elementor',
				footer__price: '$19.00',
			},
			{
				id: 8,
				image: CardsBig8,
				author__image: CardsMini8,
				author__name: 'Zain Saeed',
				text: 'I will design or redesign wix website and wix ecommerce website',
				footer__price: '$10.00',
			},
			{
				id: 9,
				image: CardsBig9,
				author__image: CardsMini9,
				author__name: 'Maria Saeed',
				text: 'I will create printful printify shopify dropshipping website shopify store',
				footer__price: '$10.00',
			},
		]
    const ArrayOfCardsOnMap = ArrayOfCards.map(ArrayOfCard => (
			<Col key={ArrayOfCard.id} xl='4' md='6' sm='12'>
				<div className='cards__item'>
					<img src={ArrayOfCard.image} className='w-100 h-100' />

					<div className='cards__item__content'>
						<div className='cards__author'>
							<div className='cards__author__wrapper'>
								<div className='cards__author__image'>
									<img
										src={ArrayOfCard.author__image}
										className='w-100 h-100'
									/>
								</div>

								<div className='cards__author__content'>
									<h5 className='cards__author__name'>
										{ArrayOfCard.author__name}
									</h5>
									<p className='cards__author__rank'>New seller</p>
								</div>
							</div>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='cards__author__heart'
								height='16'
								width='16'
								viewBox='0 0 512 512'
							>
								<path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
							</svg>
						</div>

						<h4 className='cards__text'>{ArrayOfCard.text}</h4>
					</div>

					<div className='cards__footer'>
						<span className='cards__footer__text'>Starting at</span>
						<span className='cards__footer__text'>
							{ArrayOfCard.footer__price}
						</span>
					</div>
				</div>
			</Col>
		))

    return (
			<>
				<Row>{ArrayOfCardsOnMap}</Row>

				<div className='cards__down'>
					<button className='cards__down__button'>Previous</button>
					<button className='cards__down__button'>1</button>
					<button className='cards__down__button'>2</button>
					<button className='cards__down__button'>3</button>
					<button className='cards__down__button'>Next</button>
				</div>
			</>
		)
}

export default Cards