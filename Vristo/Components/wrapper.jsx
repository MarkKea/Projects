import React from 'react'

function Wrapper({ icon, setStart, start }) {
    return <i onClick={() => setStart(!start)}>{icon}</i>
}

export default Wrapper
