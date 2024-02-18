import { Col, Row } from 'react-bootstrap'
import About from './about'

function Footer(){
    const ArrayOfCategories = [
        {
            id: 1,
			title: 'Gadgets',
			count: '(6)',
		},
		{
			id: 2,
			title: 'Podcasts',
			count: '(6)',
		},
		{
			id: 3,
			title: 'Reviews',
			count: '(7)',
		},
	]
    const ArrayOfTags = [
		{
			id: 1,
			button: 'Gadgets',
        },
		{
			id: 3,
			button: 'Games',
		},
		{
			id: 4,
			button: 'Healthy',
		},
		{
			id: 5,
			button: 'Podcasts',
		},
		{
			id: 6,
			button: 'Reviews',
		},
	]
    const ArrayOfPopulars = [
		{
			id: 1,
			image: '',
			title: '11 of Best Laptops Evaluated Based on Budget',
			date: 'August 02, 2021',
		},
		{
			id: 2,
			image: '',
			title: 'Apple Watch Series 5 is the Best One Yet By Consumer',
			date: 'August 02, 2021',
		},
		{
			id: 3,
			image: '',
			title: 'Here’s What People Think of iOS 13 New Dark Mode',
			date: 'August 02, 2021',
		},
		{
			id: 4,
			image: '',
			title: '11 of Best Laptops Evaluated Based on Budget',
			date: 'August 02, 2021',
		},
		{
			id: 5,
			image: '',
			title: 'The Best Xbox 360 Co-Op Offline Split-Screen Games',
			date: 'July 31, 2021',
		},
		{
			id: 1,
			image: '',
			title: 'How We Know Disinfectants Should Kill the Covid-19',
			date: 'July 31, 2021',
		}
	]
	const ArrayOfPopularsOnMap = ArrayOfPopulars.map(ArrayOfPopular => (
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
	))

    return (
			<div className='wrapper'>
				<Row>
					<Col lg='4' md='6' sm='12'>
						<div className='footer__item'>
							<h2 className='title'>CATEGORIES</h2>

							{ArrayOfCategories.map(ArrayOfCategory => (
								<div key={ArrayOfCategory.id} className='category__item'>
									<h3 className='title'>{ArrayOfCategory.title}</h3>
									<h3 className='category__count'>{ArrayOfCategory.count}</h3>
								</div>
							))}
						</div>

						<div className='footer__item'>
							<h2 className='title'>MAIN TAGS</h2>

							<div className='footer__tags'>
								{ArrayOfTags.map(ArrayOfTag => (
									<div key={ArrayOfTag.id} className='tags__item'>
										<button className='tags__button'>
											{ArrayOfTag.button}
										</button>
									</div>
								))}
							</div>
						</div>
					</Col>

					<Col lg='4' md='6' sm='12'>
						<div className='footer__item'>
							<h2 className='title'>LATEST POSTS</h2>
							{ArrayOfPopularsOnMap[0]}
							{ArrayOfPopularsOnMap[1]}
							{ArrayOfPopularsOnMap[2]}
						</div>
					</Col>

					<Col lg='4' md='6' sm='12'>
						<div className='footer__item'>
							<h2 className='title'>POPULAR POSTS</h2>
							{ArrayOfPopularsOnMap[3]}
							{ArrayOfPopularsOnMap[4]}
							{ArrayOfPopularsOnMap[5]}
						</div>
					</Col>
				</Row>
				<About />
			</div>
		)
}

export default Footer