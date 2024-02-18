import {Col, Container, Row} from 'react-bootstrap'

import './mykd2.scss'

import Blog from './Components/Blog/blog'
import Categories from './Components/Categories/categories'
import Posts from './Components/Posts/posts'
import Comments from './Components/Comments/comments'
import Reply from './Components/Reply/reply'
import Newsletter from './Components/Newsletter/newsletter'
import Instagram from './Components/Instagram/instagram'
import Tags from './Components/Tags/tags'
import Footer from './Components/Footer/footer'
import Share from './Components/Share/share'
import Main from './Components/Main/main'

function MyKd(){
    return (
			<Container fluid>
				<Main/>
				<Row>
					<Col xl='8' md='12' sm='12'>
						<Blog />
						<Comments />
						<Reply />
						<Share />
					</Col>

					<Col xl='4' md='12' sm='12'>
						<Categories />
						<Posts />
						<Newsletter/>
						<Instagram/>
						<Tags/>
					</Col>
				</Row>
				<Footer/>
			</Container>
		)
}

export default MyKd