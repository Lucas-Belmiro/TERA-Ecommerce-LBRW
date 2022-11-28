import React from 'react'

function InfoExtra(props) {
    return (
        <>
            <h3>{props.name}</h3>
            <h4>R$ {props.price}</h4>
        </>
    )
}
export default React.memo(InfoExtra)
