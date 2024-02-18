import { Col, Row } from 'react-bootstrap'

function Laptops() {
	const ArrayOfLaptops = [
		{
			id: 1,
			title: 'Apple Watch Series 5 is the Best One Yet by Consumer',
			date: 'July 30, 2021',
		},
		{
			id: 2,
			title: "Here's What People Think of iOS 13 New Dark Mode",
			date: 'July 30, 2021',
		},
		{
			id: 3,
			title: '18 Practices for Building Responsive Web Applications',
			date: 'July 30, 2021',
		},
	]

	return (
		<div className='wrapper'>
			<div className='header'>
				<h3 className='header__title'>Laptops</h3>
				<h3 className='header__viewer'>View All</h3>
			</div>

			<img src='' className='w-100 h-100' />

			{ArrayOfLaptops.map(ArrayOfLaptop => (
				<div key={ArrayOfLaptop.id} className='item'>
					<Row>
						<Col xl='4' sm='4'>
							<img src={ArrayOfLaptop.image} className='w-100 h-100' />
						</Col>

						<Col xl='8' sm='8'>
							<div className='content'>
								<h2 className='title'>{ArrayOfLaptop.title}</h2>
								<p className='date'>{ArrayOfLaptop.date}</p>
							</div>
						</Col>
					</Row>
				</div>
			))}
		</div>
	)
}

export default Laptops
