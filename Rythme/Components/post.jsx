import React from 'react'
import Post1 from './Images/post1.jpg'
import Post2 from './Images/post2.jpg'
import Post3 from './Images/post3.jpg'
import { Col, Container, Row } from 'react-bootstrap'

function Post() {
    const ArrayOfPosts = [
        {
            id: 1,
            image: Post1
        },
        {
            id: 1,
            image: Post2
        },
         {
            id: 1,
            image: Post3
        }
    ]

    return (
			<div className='wrapper'>
				<Container fluid>
                    <div className='text-center'>
                        <h4 className='uptitle'>Article & News</h4>
                        <h1 className='title'>Latest Post & News</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>

                    <div className = 'item__wrapper'>
                        <Row className = 'g-2'>
                            {
                                ArrayOfPosts.map((ArrayOfPost) => 
                                <Col key = {ArrayOfPost.id} lg = '4' md = '6' sm = '12'>
                                    <div className = 'darkbg column10'>
                                        <div className = 'post__item__image'>
                                            <img src = {ArrayOfPost.image} className = 'w-100'/>
                                        </div>

                                        <div className = 'post__item__content column10'>
                                            <h6 className = 'fs11em'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</h6>
                                            <p className = 'post__item__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum, velit vel rhoncus pellentesque, ante sapien feugiat augue, vel efficitur elit dui et dolor. Etiam</p>
                                            <a href = "#" className = 'post__item__link'>Read more</a>
                                        </div>

                                        <div className = 'post__item__footer'>
                                            <span className = 'post__item__text'>December 20, 2023</span>
                                            <span className = 'post__item__text'>No Comments</span>
                                        </div>
                                    </div>
                                </Col>
                                )
                            }
                        </Row>
                    </div>
                </Container>
			</div>
		)
}

export default Post
