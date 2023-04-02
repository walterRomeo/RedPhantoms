import React from "react";
import Panels from "./Panels/Panels";

export default function Main() {
    return(
        <div className="mainBody">
            <title Red Phantoms Football Club />
            <img className="logo"
            src={process.env.PUBLIC_URL +'images/logo.jpeg'}
             alt="logo" 
             width="150px"
             height="150px"
            />
            <Panels />
        </div>
    );
}