import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <div className = 'main__footer darkbg'>
            <Row className = 'g-2'>
                <Col lg = '6' md = '12' sm = '12'>
                    <p className = 'fs875'>"Music Is An Agreeable Harmony For The Honor Of God And The Permissible Delights Of The Soul."</p>
                </Col>

                <Col lg = '3' md = '6' sm = '6'>
                    <div className = 'main__footer__item'>
                        <h4 className = 'main__footer__item__title'>25K</h4>
                        <p className = 'main__footer__item__text'>Total User</p>
                    </div>
                </Col>

                <Col lg = '3' md = '6' sm = '6'>
                    <div className = 'main__footer__item'>
                        <h4 className = 'main__footer__item__title'>4.5</h4>
                        <p className = 'main__footer__item__text'>Rating Google</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Footer
