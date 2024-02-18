import './newsletter.scss'

function Newsletter(){
    return (
			<div className='newsletter'>
				<div className='newsletter__title'>
					<h4>Newsletter</h4>
				</div>

				<div className='newsletter__text'>
					<p>Lorem ipsum sitamet conteur adipiscin</p>
				</div>

				<div className='newsletter__form'>
						<input
							type='text'
							placeholder='Enter Your Email'
							className='newsletter__input'
						/>
				</div>
			</div>
		)
}
export default Newsletter