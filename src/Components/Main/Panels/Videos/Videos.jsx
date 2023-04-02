import React from "react";  

export default function Videos() {
    return (
    <div className="Videos" id="Videos">
      <h4>Videos</h4>
      <video autoplay muted controls>
        <source src={process.env.PUBLIC_URL +"images/highlight1.mov"} type="video/webm"/>
                   Your browser does not support the video tag.
      </video> 
    </div>
    )
}