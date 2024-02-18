import { Col, Row } from 'react-bootstrap'
import './instagram.scss'

import Insta1 from '../Images/insta1.png'
import Insta2 from '../Images/insta2.png'
import Insta3 from '../Images/insta3.png'
import Insta4 from '../Images/insta4.png'
import Insta5 from '../Images/insta5.png'
import Insta6 from '../Images/insta6.png'

function Instagram(){

    const ArrayOfInstagrams = [
			{
				id: 1,
				image: Insta1,
			},
			{
				id: 2,
				image: Insta2,
			},
			{
				id: 3,
				image: Insta3,
			},
			{
				id: 4,
				image: Insta4,
			},
			{
				id: 5,
				image: Insta5,
			},
			{
				id: 6,
				image: Insta6,
			},

		]
    const ArrayOfInstagramsOnMap = ArrayOfInstagrams.map((ArrayOfInstagram) =>
    <Col key = {ArrayOfInstagram.id} xl = '4' md = '4' sm = '4'>
        <div>
            <img src = {ArrayOfInstagram.image} className = 'w-100'/>
        </div>
    </Col>
    )

    return(
        <div className = 'instagram'>
            <h4 className = 'instagram__title'>Instagram</h4>
            <Row className = 'g-1'>
                {ArrayOfInstagramsOnMap}
            </Row>
        </div>
    )
}

export default Instagram