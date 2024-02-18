import { Col, Row } from 'react-bootstrap'

function News(){
    const ArrayOfNews = [
		{
			id: 1,
			image: '',
			title: 'How We Know Disinfectants Should Kill the Covid-19',
			date: 'July 31, 2021',
		},
		{
			id: 2,
			image: '',
			title: 'Car Safety Tips to Protect and your Family',
			date: 'July 31, 2021',
		},
		{
			id: 3,
			image: '',
			title: 'Know-How to Protect Your Health When Going Out',
			date: 'July 31, 2021',
		},
		{
			id: 4,
			image: '',
			title: 'Tracking Public and Private Response to the COVID-19',
			date: 'July 31, 2021',
		},
	]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>World News</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				<Row>
					<Col xl='6' md='6' sm='12'>
						<div className='item'>
							<img src='' className='w-100 h-100' />
						</div>
					</Col>

					<Col xl='6' md='6' sm='12'>
						{ArrayOfNews.map(ArrayOfNew => (
							<div className='item' key={ArrayOfNew.id}>
								<Row>
									<Col xl='4' sm='4'>
										<img src={ArrayOfNew.image} className='w-100 h-100' />
									</Col>

									<Col xl='8' sm='8'>
										<div className='content'>
											<h2 className='title'>{ArrayOfNew.title}</h2>
											<p className='date'>{ArrayOfNew.date}</p>
										</div>
									</Col>
								</Row>
							</div>
						))}
					</Col>
				</Row>
			</div>
		)
}

export default News