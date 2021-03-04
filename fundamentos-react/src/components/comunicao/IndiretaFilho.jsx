import React from 'react';
import './IndiretaFilho.css'

export default props => {

    return (
        <div className="IndiretaFilho">
            <button onClick={
                function (e) {
                    props.quandoClicar('João', 53, true);
                }
            }>
                Fornecer Informações
            </button>
        </div>
    )
}