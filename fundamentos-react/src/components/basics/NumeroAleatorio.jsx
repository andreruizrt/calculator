import React from 'react';

export default (props) => {
    const { min, max } = props;
    const aleatorio = Math.floor(Math.random() * (max - min)) + min;

    return (
        <div>
            <h1>Valor Aleatório</h1>

            <p>
                Valor Mínimo:
                <strong> { min }</strong>
            </p>
            <p>
                Valor Máximo:
                <strong> { max }</strong>
            </p>
            <p>
                Aleatório:
                <strong> { aleatorio }</strong>
            </p>
        </div>
    );
}