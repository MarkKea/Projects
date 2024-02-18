import { Row, Col } from 'react-bootstrap'

function Consoles(){
    const ArrayOfConsoles = [
		{
			id: 1,
			image: '',
			title: 'The Best Xbox 360 Co-Op offline Split-Screen Games',
		},
		{
			id: 2,
			image: '',
			title: 'Great Local Multiplayer Games to Play On PS5',
		},
		{
			id: 3,
			image: '',
			title: '13 PlayStation 5 Tips to Get the Most out',
		},
		{
			id: 4,
			image: '',
			title: 'Guide to a few of Best Portable Monitors for PS5',
		}
	]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Consoles</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				<Row>
					{ArrayOfConsoles.map(ArrayOfConsole => (
						<Col key={ArrayOfConsole.id} xl='6' md='6' sm='12'>
							<div className='console__item'>
								<img src={ArrayOfConsole.image} className='w-100 h-100' />

								<h2 className='big__title'>{ArrayOfConsole.title}</h2>
								<p className='date'>
									by <span>John Doe</span> - July 30.2021
								</p>
							</div>
						</Col>
					))}
				</Row>
			</div>
		)
}

export default Consoles