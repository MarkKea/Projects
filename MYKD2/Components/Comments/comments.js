import { Col, Row } from 'react-bootstrap'
import './comments.scss'

import Comment1 from '../Images/comment01.png'
import Comment2 from '../Images/comment02.png'
import Comment3 from '../Images/comment03.png'

function Comments(){
    const ArrayOfComments = [
			{
				id: 1,
				image: Comment1,
				name: 'John William',
			},
			{
				id: 2,
				image: Comment2,
				name: 'Hanry Foul',
			},
			,
			{
				id: 3,
				image: Comment3,
				name: 'Luna Rose',
			},
		]
    const ArrayOfCommentsOnMap = ArrayOfComments.map(ArrayOfComment => (
			<div key={ArrayOfComment.id} className='comments__item'>
				<Row>
					<Col xl='2' md='2' sm='2'>
						<div className = 'comments__image'>
							<img src={ArrayOfComment.image} className='w-100' />
						</div>
					</Col>

					<Col xl='10' md='10' sm='10'>
						<div className='comments__content'>
							<div className='comments__header'>
								<div>
									<h6 className='comments__name'>{ArrayOfComment.name}</h6>
									<span className='comments__date'>SEPTEMBER 6, 2023</span>
								</div>

								<div className='comments__reply'>
									<h6>
										<a>Reply</a>
									</h6>
								</div>
							</div>

							<div className='comments__text'>
								<p>
									Axcepteur sint occaecat atat non proident, sunt culpa officia
									deserunt mollit anim id est labor enim ad minim veniam quis
									nostrud today.
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		))

    return(
        <div className='comments'>
            <h4 className = 'comments__title'>3 Comments</h4>
            {ArrayOfCommentsOnMap}
        </div>
    )
}

export default Comments