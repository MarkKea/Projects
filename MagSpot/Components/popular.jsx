import { Col, Row } from 'react-bootstrap'

function Popular() {
    const ArrayOfPopulars = [
			{
				id: 1,
				image: '',
				title: 'The Best Xbox 360 Co-Op Offline Split-Screen Games',
				date: 'July 30, 2021',
			},
            {
                id: 2,
                image: '',
                title: 'How We Know Disinfectants Should Kill the COVID-19',
                date: 'July 30, 2021'
            },
            {
                id: 3,
                image: '',
                title: '6 Wealth Building Alternatives Without Buying Stocks',
                date: 'July 30, 2021'
            }
		]

	return (
		<div className='wrapper'>
			<div className='header'>
				<h3 className='header__title'>Popular Posts</h3>
			</div>

			<img src='' className='w-100 h-100' />

			{ArrayOfPopulars.map(ArrayOfPopular => (
				<div key={ArrayOfPopular.id} className='item'>
					<Row>
						<Col xl='4' sm='4'>
							<img src={ArrayOfPopular.image} className='w-100 h-100' />
						</Col>

						<Col xl='8' sm='8'>
							<div className='content'>
								<h2 className='title'>{ArrayOfPopular.title}</h2>
								<p className='date'>{ArrayOfPopular.date}</p>
							</div>
						</Col>
					</Row>
				</div>
			))}
		</div>
	)
}

export default Popular
