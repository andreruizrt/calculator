import React, { cloneElement } from "react";
// import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            
            {/** Spread property, all the father props are received 
             * <FamiliaMembro nome="José" {...props} />
             * <FamiliaMembro nome="Pedro" sobrenome="Silva" />
            */}

            {React.Children.map(props.children, (child, i) => {
                    return cloneElement(child, { ...props, key: i});
            
            })}
            
            
        </div>
    )
}