import React from "react"
import Merchandise from "./Merchandise/Merchandise"
import About from "./About/About"
import League from "./League/League"
import News from "./News/News"
import Videos from "./Videos/Videos"

export default function Panels() {
  return (
    <div className="panels">
      <h3>Panels</h3>
      <About />
      <News />
      <Videos />
      <League/>
      <Merchandise/>
    </div>
  )
}