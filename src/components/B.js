import React from "react";
import useSelect from "./useSelect";
function B(){
    let[love,loved]=useSelect();
    return(<>
        <h2>{love}</h2>
    </>)
}
export default B;