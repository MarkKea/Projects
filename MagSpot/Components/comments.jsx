import { Col, Row } from 'react-bootstrap'

function Comments(){
    const ArrayOfComments = [
        {
            id: 1,
            image: '',
            title: 'John Doe',
            text: 'Lorem Ipsum is simply dummy text of the printing a...'
        },
        {
            id: 2,
            image: '',
            title: 'Anonymous',
            text: 'The generated Lorem ipsum is therefore always free...'
        },
        {
            id: 3,
            image: '',
            title: 'John Doe',
            text: 'If you are going to use a passage of Lorem Ipsum, ...'
        }
    ]

    return (
			<div className='wrapper'>
				<div className='header'>
					<h2 className='header__title'>Comments</h2>
				</div>

				{ArrayOfComments.map(ArrayOfComment => (
					<div key={ArrayOfComment.id} className='item'>
						<Row>
							<Col xl='4' sm='4'>
								<img src={ArrayOfComment.image} className='w-100 h-100' />
							</Col>

							<Col xl='8' sm='8'>
								<div className='content'>
									<h2 className='title'>{ArrayOfComment.title}</h2>
									<p className='text'>{ArrayOfComment.text}</p>
								</div>
							</Col>
						</Row>
					</div>
				))}
			</div>
		)
}

export default Comments