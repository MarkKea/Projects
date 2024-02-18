function Form(){
    return (
			<div className='wrapper'>
				<div className='header'>
					<h3 className='header__title'>Mailchimp Form</h3>
				</div>

				<div className='form__content'>
					<p className='text'>
						Subscribe to our mailing list to get the new updates
					</p>

					<input className='form__input w-100' type='text' placeholder='Email Address' />

					<button className='form__button'>Subsribe</button>
				</div>
			</div>
		)
}

export default Form