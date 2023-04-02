import React from "react"

export default function Merchandise() {
    return (
    <div className="Merchandise" id="Merchandise">
      <h4>Merchandise</h4>
      <p>Merchandise information here
         Here is the latest merch coming up:<br/>
         <figure>
          <img width="150" height="150"
                    src={process.env.PUBLIC_URL +"images/unsplash.jpg"}
                    alt="Merch1"/>
                    <figcaption>Upcoming merchandise</figcaption>
          </figure>
      </p>
      
    </div>
    )
}