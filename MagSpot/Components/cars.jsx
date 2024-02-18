import { Col, Row } from 'react-bootstrap'

function Cars(){
    const ArrayOfCars = [
		{
			id: 1,
			image: '',
			title: 'Elegant Business Style Cars for Heavy Traffic',
			date: 'July 31, 2021',
		},
		{
			id: 2,
			image: '',
			title: 'Why Navigation System Doesn’t Work Always',
			date: 'July 31, 2021',
		},
		{
			id: 3,
			image: '',
			title: 'Do You Like the Maneuvers of Your Car?',
			date: 'July 31, 2021',
		},
	]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Cars</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				<img src='' className='w-100 h-100' />

				<Row>
					{ArrayOfCars.map(ArrayOfCar => (
						<Col key={ArrayOfCar.id} xl='4' sm='4'>
							<div className='item'>
								<img src={ArrayOfCar.image} className='w-100 h-100' />
								<h2 className='title'>{ArrayOfCar.title}</h2>
								<p className='date'>{ArrayOfCar.date}</p>
							</div>
						</Col>
					))}
				</Row>
			</div>
		)
}

export default Cars