import { Col, Row } from 'react-bootstrap'

function Mobile(){
    const ArrayOfMobiles = [
		{
			id: 1,
			image: '',
			title: "Here's What People Think of iOS 13 New Dark Mode",
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
		},
		{
			id: 2,
			image: '',
			title: '6 Wealth Building Alternatives Without Buying Stocks',
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
		},
		{
			id: 3,
			image: '',
			title: 'Part-time Trading on Forex as an Alternative Income',
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
		},
		{
			id: 4,
			image: '',
			title: 'Catch the Best iPhone X Deals Plus Your Favorite gadgets',
			text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
		}
	]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Mobile</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				{ArrayOfMobiles.map(ArrayOfMobile => (
					<div key={ArrayOfMobile.id} className='item'>
						<Row>
							<Col xl='4' sm='4'>
								<img src={ArrayOfMobile.image} className='w-100 h-100' />
							</Col>

							<Col xl='8' sm='8'>
								<h2 className='big__title'>{ArrayOfMobile.title}</h2>
								<p className='text'>{ArrayOfMobile.text}</p>
								<p className='date'>
									by <span>John Doe</span> - August 02, 2021
								</p>
							</Col>
						</Row>
					</div>
				))}
			</div>
		)
}

export default Mobile