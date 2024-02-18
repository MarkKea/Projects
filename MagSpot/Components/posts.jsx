import { Col, Row } from 'react-bootstrap'

function Posts(){
    const ArrayOfPosts = [
			{
				id: 1,
				image: '',
				title: '11 of Best Laptops Evaluated Based on Budget',
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
			{
				id: 2,
				image: '',
				title: 'Apple Watch Series 5 is the Best One Yet by Consumer',
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
			{
				id: 3,
				image: '',
				title: "Here's What People Think of iOS 13 New Dark Mode",
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
			{
				id: 4,
				image: '',
				title: '18 Practices For Building Responsive Applications',
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
			{
				id: 5,
				image: '',
				title: 'Opera Browser Lets You Apply Dark Mode to Web Page',
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
			{
				id: 6,
				image: '',
				title: 'Apple MacBook Pro is the Best One Yet by Consumer',
				text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been…',
			},
		]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Latest Posts</h3>
					<h3 className='header__viewer'>View All</h3>
				</div>

				{ArrayOfPosts.map(ArrayOfPost => (
					<div key={ArrayOfPost.id} className='item'>
						<Row>
							<Col xl='4' sm='4'>
								<img src={ArrayOfPost.image} className='w-100 h-100' />
							</Col>

							<Col xl='8' sm='8'>
								<h2 className='big__title'>{ArrayOfPost.title}</h2>
								<p className='text'>{ArrayOfPost.text}</p>
								<p className='date'>
									by <span>John Doe</span> - August 02, 2021
								</p>
							</Col>
						</Row>
					</div>
				))}

				<div className='posts__footer'>
					<button className='posts__button'>Load More</button>
				</div>
			</div>
		)
}

export default Posts