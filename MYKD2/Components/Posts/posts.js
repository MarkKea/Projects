import './posts.scss'

import Post1 from '../Images/post1.png'
import Post2 from '../Images/post2.png'
import Post3 from '../Images/post3.png'

function Posts(){

    const ArrayOfPosts = [
			{
				id: 1,
				image: Post1,
				title: 'ZOMBIE TOURNAMENT LAND MAX',
				date: 'AUG 19, 2023',
			},
			{
				id: 2,
				image: Post2,
				title: 'PLAY TO EARN CRYPTO GAMES',
				date: 'AUG 19, 2023',
			},
			{
				id: 3,
				image: Post3,
				title: 'NFT GAMES ANDROID LAND MAX',
				date: 'AUG 19, 2023',
			},
		]
    const ArrayOfPostsOnMap = ArrayOfPosts.map(ArrayOfPost => (
			<div className='posts__item' key={ArrayOfPost.id}>
				<div className='posts__image'>
					<img src={ArrayOfPost.image} className='w-100' />
				</div>

				<div>
					<div className='posts__title'>
						<h6>
							<a>{ArrayOfPost.title}</a>
						</h6>
					</div>

					<span className='posts__date'>{ArrayOfPost.date}</span>
				</div>
			</div>
		))

    return(
        <div className = 'posts'>
            <div className = 'posts__header'>
                <h4>Recent Posts</h4>
            </div>

            <div>
               {ArrayOfPostsOnMap} 
            </div>
            
        </div>
    )
}

export default Posts