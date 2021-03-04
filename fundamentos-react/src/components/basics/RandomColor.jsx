import React from 'react';

export default () => {
    
    var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
    bg_colour = "#" + ("000000" + bg_colour).slice(-6);
    
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
