import './tags.scss'

function Tags(){
    return (
			<div className='tags'>
				<div className='tags__title'>
					<h4>Tags Cloud</h4>
				</div>

				<div className='tags__collection'>
					<a className='tags__button'>E-sports</a>
					<a className='tags__button'>Fantasy</a>
					<a className='tags__button'>Game</a>
					<a className='tags__button'>Tournaments</a>
					<a className='tags__button'>Matches</a>
					<a className='tags__button'>Streamers</a>
				</div>
			</div>
		)
}

export default Tags