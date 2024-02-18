import React from 'react'

import './post.scss'

function Post() {
    return (
			<div className='post__wrapper'>
				<h6 className='post__title'>Want to Post Your Event</h6>
				<p className='post__text'>
					Post your event on Goeveni for free. Just make an account and add it
					through the simple form. As simple as that.
				</p>

				<div>
					<button className='orange__button'>Post it Now</button>
				</div>
			</div>
		)
}

export default Post
