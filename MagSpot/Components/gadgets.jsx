import { Col, Row } from 'react-bootstrap'

function Gadgets(){
    const ArrayOfGadgets = [
		{
			id: 1,
			title: 'Start a Digital Marketing Website for your Service',
			date: 'July 30, 2021',
		},
		{
			id: 2,
			title: 'Part-time Trading on Forex as an Alternative Income',
			date: 'July 30, 2021',
		},
		{
			id: 3,
			title: 'Catch the Best IPhone X Deals Plus Your Favorite gadgets',
			date: 'July 30, 2021',
		}
	]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Gadgets</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				<img src='' className='w-100 h-100' />

				{ArrayOfGadgets.map(ArrayOfGadget => (
					<div key={ArrayOfGadget.id} className='item'>
						<Row>
							<Col xl='4' sm='4'>
								<img src={ArrayOfGadget.image} className='w-100 h-100' />
							</Col>

							<Col xl='8' sm='8'>
								<div className='content'>
									<h2 className='title'>{ArrayOfGadget.title}</h2>
									<p className='date'>{ArrayOfGadget.date}</p>
								</div>
							</Col>
						</Row>
					</div>
				))}
			</div>
		)
}

export default Gadgets