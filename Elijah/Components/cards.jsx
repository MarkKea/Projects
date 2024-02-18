import { Col, Row } from 'react-bootstrap'
import { motion } from 'framer-motion'
import cards1 from './Images/cards1.jpg'
import cards2 from './Images/cards2.jpg'
import cards3 from './Images/cards3.jpg'
import cards4 from './Images/cards4.jpg'
import cards5 from './Images/cards5.jpg'
import cards6 from './Images/cards6.jpg'
import cards7 from './Images/cards7.jpg'
import cards8 from './Images/cards8.jpg'
import cards9 from './Images/cards9.jpg'

function Cards(){
    const ArrayOfCards = [
			{
				id: 1,
				image: cards1,
				button: 'Business',
				title: 'The trick to getting more done is to have the freedom to roam',
				text: 'Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.',
			},
			{
				id: 2,
				image: cards2,
				button: 'Business',
				title: 'Day He Won’t Soon Forget Denny Backup At Ready to Use!',
				text: 'Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et, maximus metus.',
			},
			{
				id: 3,
				image: cards3,
				button: 'Business',
				title: 'Apple Watch Series 9 Reportedly Has Flat Sides and Bigger',
				text: 'Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.',
			},
			{
				id: 4,
				image: cards4,
				button: 'Business',
				title: 'Boxed Water Partners With To Consumer Creativity.',
				text: 'Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.',
			},
			{
				id: 5,
				image: cards5,
				button: 'Business',
				title: 'Will The Democrats Be Able To Online Gambling Ban Done!',
				text: 'Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus. Vivamus lobortis posuere enim finibus sodales. Phasellus quis tellus scelerisque, sagittis tortor et, maximus metus.',
			},
			{
				id: 6,
				image: cards6,
				button: 'Business',
				title: 'Using Sports Ahead Competiti on The Best Coworking Space',
				text: 'Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo. Vestibulum volutpat velit ac tellus mollis, sit amet sodales metus elementum. Aliquam eu mi massa. Proin suscipit enim a pulvinar viverra.',
			},
			{
				id: 7,
				image: cards7,
				button: 'Business',
				title: 'Fasion Trends and Li Edelkoort the Culture Shock Special Report',
				text: 'Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus bonorum malorumque dissimilitudo.',
			},
			{
				id: 8,
				image: cards8,
				button: 'Business',
				title: 'VR Use of Computer Technology Simulated at Environment.',
				text: 'Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus bonorum malorumque dissimilitudo.',
			},
			{
				id: 9,
				image: cards9,
				button: 'Business',
				title: 'My childhood was full of wonderful memories which never share',
				text: 'Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest, ut id ipsum, quod interest, non sit magnum. Ita fit ut, quanta differentia est in principiis naturalibus, tanta sit in finibus bonorum malorumque dissimilitudo.',
			},
		]
    const ArrayOfCardsOnMap = ArrayOfCards.map(ArrayOfCard => (
			<Col key={ArrayOfCard.id} xl='4' md='4' sm='12'>
				<div className='cards column10'>
					<img src={ArrayOfCard.image} className='w-100' />

					<div className='cards__content column10'>
						<motion.div
							className='cards__button'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							<button className='grey__button'>Idea</button>
							<button className='grey__button'>{ArrayOfCard.button}</button>
						</motion.div>

						<motion.h3
							className='cards__title'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							{ArrayOfCard.title}
						</motion.h3>

						<motion.p
							className='cards__text'
							initial={{ opacity: 0, x: -100 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.5 }}
						>
							{ArrayOfCard.text}
						</motion.p>
					</div>
				</div>
			</Col>
		))

    return (
			<Row className='card__holder'>{ArrayOfCardsOnMap}</Row>
		)
}

export default Cards