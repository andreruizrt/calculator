import React from 'react';
import aleatorio from "./aleatorio";

export default (props) => {
    const { min, max } = props;
    const resultado = aleatorio(min, max);

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
                <strong> { resultado }</strong>
            </p>
        </div>
    );
}