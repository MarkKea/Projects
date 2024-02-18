import { Col, Row } from 'react-bootstrap'

function Travel(){
    const ArrayOfTravels = [
        {
            id: 1,
            image: '',
            title: 'Top 10 Snowboarding Resorts for Beginners',
            date: 'July 31, 2021'
        },
        {
            id: 2,
            image: '',
            title: "Why It's better to Travel with Friends",
            date: 'July 31, 2021'
        },
        {
            id: 3,
            image: '',
            title: 'The 5 Best Beach Destinations in the World',
            date: 'July 31, 2021'
        },
        {
            id: 4,
            image: '',
            title: '5 Online Bike Rental Apps with Bikes for Traveller',
            date: 'July 31, 2021'
        }
    ]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Travel</h3>
				</div>

				<Row>
					{ArrayOfTravels.map(ArrayOfTravel => (
						<Col key={ArrayOfTravel.id} xl='6' sm='6'>
							<div className='item'>
								<img src={ArrayOfTravel.image} className='w-100 h-100' />

								<h2 className='title'>{ArrayOfTravel.title}</h2>
								<p className='date'>{ArrayOfTravel.date}</p>
							</div>
						</Col>
					))}
				</Row>
			</div>
		)
}

export default Travel