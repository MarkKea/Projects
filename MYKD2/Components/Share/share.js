import { Col, Row } from 'react-bootstrap';
import './share.scss';

import Share1 from '../Images/comment03.png';

function Share(){
    return (
			<div className='share'>
				<div className='share__header'>
					<h5 className='share__title'>
						Tags: <span>Esports</span>, <span>fantasy</span>, <span>game</span>
					</h5>

					<h5 className='share__title'>
						<span>Share:</span>
					</h5>
				</div>

				<div className='share__content'>
					<Row className='align-items-center'>
						<Col xl='3' md='3' sm='3'>
							<div className='share__content__image'>
								<img src={Share1} />
							</div>
						</Col>

						<Col xl='9' md='9' sm='9'>
							<div className='share__content__uptitle'>
								<span>Written by</span>
							</div>

							<h4 className='share__content__title'>
								<a>KACEYTRON G.</a>
							</h4>

							<div className='share__content__text'>
								<p>
									Axcepteur sint occaecat atat non proident, sunt culpa officia
									deserunt mollit anim id est labor umLor emdolor.
								</p>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		)
}

export default Share