import React from "react";
function Button({handel,children}){
    console.log('Button');
    return(
        <button onClick={handel}>increment{children}</button>
    )
}
export default React.memo(Button);