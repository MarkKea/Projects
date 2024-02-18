function Tags(){
    const ArrayOfTags = [
			{
				id: 1,
				button: 'Cars',
			},
			{
				id: 2,
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
			}            
		]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Main Tags</h3>
				</div>

				<div className='tags__content'>
					{ArrayOfTags.map(ArrayOfTag => (
						<div key={ArrayOfTag.id} className='tags__item'>
							<button className='tags__button'>{ArrayOfTag.button}</button>
						</div>
					))}
				</div>
			</div>
		)
}

export default Tags