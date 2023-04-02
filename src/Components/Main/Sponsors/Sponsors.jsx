import React from "react";

function Sponsors() {
    return (
      <div className="sponsors">
        <h3>Sponsors</h3>
                <figure>
                    <img src={process.env.PUBLIC_URL +'images/sponsor3.jpeg'}
                     alt="sponsor3"
                     height="150px"
                     width="150px"/>
                    <figcaption>Sponosor 3</figcaption>
                </figure>
                <figure>
                    <img width="150"
                     height="150" 
                     src={process.env.PUBLIC_URL +"images/sponsor2.jpeg"}
                         alt="sponsor2"/>
                    <figcaption>Sponosor 2</figcaption>
                </figure>
                <figure>
                    <img width="150" height="150"
                    src={process.env.PUBLIC_URL +"images/sponsor1.jpeg"}
                    alt="sponsor1"/>
                    <figcaption>Sponosor 1</figcaption>
                </figure>
      </div>
    )
  }
  export default Sponsors;