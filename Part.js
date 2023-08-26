import React from "react";
import './Part.css'
function Part({name}){

    return(
        <div className="item">
        <h1 className="h1">
            {name}
            </h1>
        </div>
    )
}
export default Part;