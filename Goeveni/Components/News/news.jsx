import React from 'react'

import './news.scss'

import Music from '../Images/music.png'
import Art from '../Images/art.png'
import Sports from '../Images/sports.png'

function News() {
    const ArrayOfNews = [
        {
            id: 1,
            image: Music,
            title: 'Music',
            text: 'Suspendisse cursus egestas luctus.',
            link: 'https://website.com/news'
        },
        {
            id: 2,
            image: Art,
            title: 'Art',
            text: 'Suspendisse cursus egestas luctus.',
            link: 'https://website.com/news'
        },
        {
            id: 3,
            image: Sports,
            title: 'Sports',
            text: 'Suspendisse cursus egestas luctus.',
            link: 'https://website.com/news'
        }
    ]

    return (
			<div className='side__wrapper'>
				<h3 className='side__title'>News</h3>

				{ArrayOfNews.map(ArrayOfNew => (
					<div className='side__item' key={ArrayOfNew.id}>
						<div className = 'news__content'>
							<div className='news__header'>
                                <img src = {ArrayOfNew.image} className = 'news__image'/>
								<h6 className='news__title'>{ArrayOfNew.title}</h6>
							</div>

							<p className='news__text'>{ArrayOfNew.text}</p>
							<a className='news__link' href='#'>
								{ArrayOfNew.link}
							</a>
						</div>
					</div>
				))}
			</div>
		)
}

export default News
