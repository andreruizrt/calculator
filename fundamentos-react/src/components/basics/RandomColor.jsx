import { corAleatoria } from './aleatorio';
import React from 'react';

export default () => {
    
    const bg_colour = corAleatoria();
    
    const styles = {
        fontSize: "30px",
        padding: "1px 20px",
        backgroundColor: bg_colour,
        border: "2px solid #000",
        borderRadius: "4px",
    }
    
    return (
        <div>
            <span style={{ padding: "5px",backgroundColor: "#222", borderRadius: "5px"}}> New Card Random Color: </span>
            <br />
            <strong style={styles}>{bg_colour}</strong>
        </div>
    )
}
