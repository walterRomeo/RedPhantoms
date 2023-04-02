import React from "react"
import About from "./About/About"
import News from "./News/News"
import Videos from "./Videos/Videos"
import League from "./League/League"
import Merchandise from "./Merchandise/Merchandise"

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