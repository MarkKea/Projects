import { Col, Row } from 'react-bootstrap'

import { motion } from 'framer-motion'

import case1 from './Images/cards1.jpg'
import case2 from './Images/cards3.jpg'
import case3 from './Images/cards5.jpg'
import case4 from './Images/cards7.jpg'
import case5 from './Images/case5.jpg'
import case6 from './Images/case6.jpg'

function Case(){

    const ArrayOfCases = [
			{
				id: 1,
				image: case1,
			},
			{
				id: 2,
				image: case2,
			},
			,
			{
				id: 3,
				image: case3,
			},
			,
			{
				id: 4,
				image: case4,
			},
			,
			{
				id: 5,
				image: case5,
			},
			{
				id: 6,
				image: case6,
			},
		]
    const ArrayOfCasesOnMap = ArrayOfCases.map(ArrayOfCase => (
			<Col xl='2' md='4' sm='6'>
				<div key={ArrayOfCase.id} className='case__wrapper'>
					<img src={ArrayOfCase.image} className='w-100' />

					<motion.div
						className='case__content column10'
						initial={{ opacity: 0, x: -100 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div>
							<button className='red__button'>Idea</button>
						</div>
						<h3 className='case__content__title'>
							The trick to getting more done is to have
						</h3>
					</motion.div>
				</div>
			</Col>
		))

    return (
			<div className='case'>
				<motion.h2
					className='case__title'
					initial={{ opacity: 0, x: -100 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
				    In Case you missed it!
				</motion.h2>

				<Row>{ArrayOfCasesOnMap}</Row>
			</div>
		)
}

export default Case