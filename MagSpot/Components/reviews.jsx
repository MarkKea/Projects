import { Row, Col } from 'react-bootstrap'

function Reviews(){
    const ArrayOfReviews = [
			{
				id: 1,
				image: '',
				text: 'Consoles',
				title: 'The Best Xbox 360 Co-Op Offline Split-Screen Games',
				date: 'July 31, 2021',
			},
			{
				id: 2,
				image: '',
				text: 'Consoles',
				title: 'Great Local Multiplayer Games to Play on PS5',
				date: 'July 31, 2021',
			},
			{
				id: 3,
				image: '',
				text: 'Deals',
				title: 'How to Equip Your Studio Like the Top Tech',
				date: 'July 31, 2021',
			},
			{
				id: 4,
				image: '',
				text: 'Deals',
				title: 'The Best Wired and Wireless Gaming Headset',
				date: 'July 31, 2021',
			},
			{
				id: 5,
				image: '',
				text: 'Deals',
				title: 'Lesson Learned Selling Cheap Electronics',
				date: 'July 31, 2021',
			},
			{
				id: 6,
				image: '',
				text: 'Consoles',
				title: '13 PlayStation 5 Tips to Get the Most Out',
				date: 'July 31, 2021',
			},
		]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Reviews</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>
				<Row>
					{ArrayOfReviews.map(ArrayOfReview => (
						<Col xl='4' md='6' key={ArrayOfReview.id}>
							<div className='reviews__image'>
								<img src={ArrayOfReview.image} className='w-100 h-100' />
								<span className='button'>{ArrayOfReview.text}</span>
							</div>

							<h2 className='title'>{ArrayOfReview.title}</h2>

							<p className='date'>{ArrayOfReview.date}</p>
						</Col>
					))}
				</Row>
			</div>
		)
}

export default Reviews