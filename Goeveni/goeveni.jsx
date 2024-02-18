import React from 'react'

import './goeveni.scss'

import { Col, Container, Row } from 'react-bootstrap'

import Categories from './Components/Categories/categories'
import People from './Components/Peoples/people'
import Events from './Components/Events/events'
import Cards from './Components/Cards/cards'
import Post from './Components/Post/post'
import News from './Components/News/news'
import Explore from './Components/Explore/explore'
import Footer from './Components/Footer/footer'
import Buttons from './Components/Buttons/buttons'

function Goeveni() {
    return (
			<>
				<Container fluid>
					<Row>
						<Col lg='3' md='12' sm='12'>
							<Categories />
							<People />
						</Col>

						<Col lg='6' md='12' sm='12'>
							<Events />
							<Buttons />
							<Cards />
						</Col>

						<Col lg='3' md='12' sm='12'>
							<Post />
							<Explore />
							<News />
						</Col>
					</Row>
				</Container>
				<Footer />
			</>
		)
}

export default Goeveni
