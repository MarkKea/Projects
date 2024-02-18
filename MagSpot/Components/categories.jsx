function Categories(){
    const ArrayOfCategories = [
        {
            id: 1,
            title: 'Gadgets',
            count: '(6)'
        },
        {
            id: 2, 
            title: 'Healthy',
            count: '(6)'
        },
        {
            id: 3,
            title: 'Podcasts',
            count: '(6)'
        },
        {
            id: 4, 
            title: 'Reviews',
            count: '(7)'
        }
    ]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Categories</h3>
				</div>

				{ArrayOfCategories.map(ArrayOfCategory => (
					<div key={ArrayOfCategory.id} className='category__item'>
						<h3 className='title'>{ArrayOfCategory.title}</h3>
						<h3 className='category__count'>{ArrayOfCategory.count}</h3>
					</div>
				))}
			</div>
		)
}

export default Categories