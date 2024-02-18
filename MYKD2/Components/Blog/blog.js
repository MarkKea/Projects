import { Container } from "react-bootstrap";

import BlogPost from '../Images/blog_post.jpg'
import BlogPost2 from '../Images/blog_post02.jpg'

import './blog.scss'

function Blog(){
    return (
			<div className='blog'>
				<img src={BlogPost} className='w-100' />

				<div className='blog__view'>
					<a className='blog__view__title'>
						By <span>Admin</span>
					</a>
					<a className='blog__view__date'>Aug 16, 2023</a>
					<a className='blog__view__comment'>
						<span>No Comments</span>
					</a>
				</div>

				<div className='blog__title'>
					<h2>PLAY TO EARN CRYPTO GAMES PLACE</h2>
				</div>

				<div className='blog__text'>
					<p>
						Excepteur sint occaecat atat non proident, sunt in culpa qui officia
						deserunt mollit anim id est labor umLor em ipsum dolor amet,
						consteur adiscing Duis elentum solliciin is yaugue euismods Nulla
						ullaorper. Ipsum is simply dummy text of printing and typeetting
						industry. Lorem Ipsum has been the industry's standsaard sipiscing
						Duis elementum solliciin. Duis aute irure dolor in repderit in
						voluptate velit esse cillum dolorliquip ex ea commodo repderit in
						voluptate consequat nulla ullaorper.
					</p>
				</div>

				<div className='blog__text'>
					<p>
						Axcepteur sint occaecat atat non proident, sunt in culpa qui officia
						deserunt mollit anim id est labor umLor em ipsum dolor amet,
						consteur adiscing Duis elentum solliciin is yaugue euismods Nulla
						ullaorper. Ipsum is simply dummy text of printing and typeetting
						industry. Lorem Ipsum has been the industry's standsaard sipiscing
						Duis elementum solliciin. Duis aute irure dolor in repderit.
					</p>
				</div>

				<div className='blog__text'>
					<p>
						Simply dummy text of printing and typeetting industry. Lorem Ipsum
						has been the industry's standsaard sipiscing Duis elementum
						solliciin.Duis aute irure dolor in repderit.
					</p>
				</div>

				<div className='blog__title'>
					<h2>NFT GAMES ANDROID NO INVESTMENT</h2>
				</div>

				<div className='blog__text'>
					<p>
						Axcepteur sint occaecat atat non proident, sunt in culpa qui officia
						deserunt mollit anim id est labor umLor em ipsum dolor amet,
						consteur adiscing Duis elentum solliciin is yaugue euismods Nulla
						ullaorper. Ipsum is simply dummy text of printing and typeetting
						industry. Lorem Ipsum has been the industry's standsaard sipiscing
						Duis elementum solliciin.Duis aute irure dolor in repderit.
					</p>
				</div>

				<img src={BlogPost2} className='w-100' />

				<div className='blog__text'>
					<p>
						Axcepteur sint occaecat atat non proident, sunt in culpa qui officia
						deserunt mollit anim id est labor umLor em ipsum dolor amet,
						consteur adiscing Duis elentum solliciin is yaugue euismods Nulla
						ullaorper. Ipsum is simply dummy text of printing and typeetting
						industry.
					</p>
				</div>
			</div>
		)
}

export default Blog