import React from 'react'

export default props => {
    const isPar = props.numero % 2 === 0

    return (
        <div>
            <span>{props.numero} é </span>
            { isPar ? <strong>Par</strong> : <strong>Ímpar</strong> }
        </div>
    )
}