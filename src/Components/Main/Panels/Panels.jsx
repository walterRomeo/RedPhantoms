import React from "react"
import About from "./About/About"
import News from "./News/News"
import Videos from "./Videos/Videos"
import League from "./League/League"
import Merchandise from "./Merchandise/Merchandise"
import ContactUs from "./Contact/Contact"

 function Panels() {
  return (
    <div className="panels">
      <About />
      <News />
      <Videos />
      <League/>
      <Merchandise/>
      <ContactUs/>
    </div>
  )
}

export default Panels;