import React from 'react';

export default function ComParametro(params) {

    const status = params.nota >= 7 ? 'Aprovado' : 'de Recuperação'
    
    return (
        <div>
            <h2>{params.titulo}</h2>
            <p>
                <strong>{params.aluno} </strong>
                tem nota
                <strong> {params.nota} </strong>
                e está
                <strong> { status } </strong>
            </p>
        </div>
    )
}