import React from "react"
import "./index.css"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Headshot from "../components/headshot"
import Icon from "../components/icon"
const IndexPage = () => (
  <Layout>
    <Nav />
    <div id="content">
      <div id="me">
        <h2 id="name" className="white">
          Terrence Eisenhower
        </h2>
        <div id="title" className="orange light">
          Developer <span class="white">//</span> Fly Fisherman
        </div>
      </div>
      <div id="headshot">
        <Headshot />
      </div>
      <div id="welcome" className="align">
        <h1 className="white bold">WELCOME!</h1>
        <h3 className="orange subtitle bold">Thanks for stopping by!</h3>
        <hr></hr>
      </div>
      <div id="about" className="align">
        <p className="white">
          I’m a `<span className="highlight">Full-Stack Developer</span>`. Based
          out of the the great state of Pennsylvania. I started my adventure
          with a degree in graphic design only to stumbled upon the world of
          development. Have an awesome project idea? Let’s chat!
        </p>
        <div id="awesomeButton" className="white">
          Start Awesomeness
        </div>
        <Icon />
      </div>
    </div>
  </Layout>
)

export default IndexPage