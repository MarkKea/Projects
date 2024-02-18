import { Row, Col } from 'react-bootstrap'

function Videos(){
    const ArrayOfVideos = [
			{
				id: 1,
				image: '',
				title: 'This Trailer Explores The Dangers Of The Open World',
				date: 'July 30, 2021',
			},
			{
				id: 2,
				image: '',
				title: 'Everything You Need To Know About Ghost Breakpoint',
				date: 'July 30, 2021',
			},
			{
				id: 3,
				image: '',
				title: 'Sakura Gets A Patch That Calms That Bull',
				date: 'July 30, 2021',
			},
			{
				id: 4,
				image: '',
				title: 'The Hits And Misses Of Overwatch League',
				date: 'July 30, 2021',
			},
		]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Videos</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				<Row>
					<Col xl='6' sm='12'>
						<img src='' className='w-100 h-100' />
					</Col>

					<Col xl='6' sm='12'>
						<Row>
							{ArrayOfVideos.map(ArrayOfVideo => (
								<Col xl='6' sm='6'>
									<div key={ArrayOfVideo.id} className='item'>
										<img src={ArrayOfVideo.image} className='w-100 h-100' />

										<h2 className='title'>{ArrayOfVideo.title}</h2>
										<p className='date'>{ArrayOfVideo.date}</p>
									</div>
								</Col>
							))}
						</Row>
					</Col>
				</Row>
			</div>
		)
}
export default Videos