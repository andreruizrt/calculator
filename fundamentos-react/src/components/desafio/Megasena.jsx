import './Megasena.css'
import React from 'react';
import Bola from './Bola';


export default (props) => {
    const { quant } = props;

    function renderBolas() {
        if(quant < 6 && quant > 15){
            return <Bola />;
        }
        else {  
            let bolas = [];

            for (let i = 0; i < quant; i++) {
                bolas.push(<Bola style={{margin: '1px'}} key={i}/>);
            }

            return bolas;
        }
         
            
    }   

    return (
        <div>
            <h1 style={{fontWeight: '400'}}>Sorteio</h1>
            <div className="Megasena">
                {renderBolas()}
            </div>
        </div>
    )
}