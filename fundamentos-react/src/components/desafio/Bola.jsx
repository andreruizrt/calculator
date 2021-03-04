import './Bola.css';
import React from 'react';
import aleatorio, { corAleatoria } from '../basics/aleatorio';

export default (props) => {
    const resultado = corAleatoria();
    
    return (
        <div className="Bola" style={{backgroundColor: resultado}}>
            <div className="Interno" >
                <h1>{aleatorio(1, 60)}</h1>
            </div>
        </div>
    )
}