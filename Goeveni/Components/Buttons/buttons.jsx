import React from 'react'

import './buttons.scss'

function Buttons() {
    const ArrayOfButtons = [
        {
            id: 1,
            button: 'Local'
        },
        {
            id: 2,
            button: 'This week'
        },
        {
            id: 3,
            button: 'Classes'
        },
        {
            id: 4,
            button: 'Friends'
        },
        {
            id: 5,
            button: 'Online'
        },
        {
            id: 6,
            button: 'Following'
        }
    ]

    return (
        <div className = 'buttons__wrapper'>
            <button className = 'orange__button'>Top</button>

            {
                ArrayOfButtons.map((ArrayOfButton) =>
                    <div key = {ArrayOfButton.id}>
                        <button className = 'default__button'>{ArrayOfButton.button}</button>
                    </div>
                )
            }
        </div>
    )
}

export default Buttons
