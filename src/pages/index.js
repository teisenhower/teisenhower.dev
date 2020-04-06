import React from "react"
import "./index.css"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Headshot from "../components/headshot"
import Icon from "../components/icon"
import Footer from "../components/footer"
import Helmet from "react-helmet"

const IndexPage = () => (
  <div id="main">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Terrence Eisenhower - Developer</title>
      <link rel="canonical" href="https://www.teisenhower.dev/" />
      <meta name="author" content="Terrence Eisenhower" />
      <meta
        name="keywords"
        content="web, developer, development, html, css, js, php, react, gatsby, blog"
      />
    </Helmet>
    <Layout>
      <Nav />
      <div id="content">
        <section id="me" className="alpha">
          <h2 id="name" className="white">
            Terrence Eisenhower
          </h2>
          <div id="title" className="orange light">
            Developer <span className="white">//</span> Fly Fisherman
          </div>
        </section>
        <section id="headshot">
          <Headshot />
        </section>
        <section id="welcome" className="align">
          <h1 className="welcome white bold alpha">WELCOME!</h1>
          <h3 className="orange subtitle bold alpha">
            Thanks for stopping by!
          </h3>
          <hr></hr>
        </section>
        <section id="about" className="align">
          <p id="mainParagraph" className="white alpha">
            I’m what you would call a `
            <span className="highlight">Full-Stack Developer</span>`. Simply
            put, I am a one stop shop for your next big web project. Whether
            that’s a simple personal blog, eCommerce site for your growing
            business, or a full fledged web based application. Starting from
            design all the way through development, I’ve got you covered. Have
            an awesome project idea in mind or need help with a current project?
            Let’s hear it!
          </p>
          <a
            id="awesomeButton"
            className="white"
            href="mailto:terrence@teisenhower.dev?subject=Awesome%20Project"
          >
            <div id="awesomeSwitch">
              <div>terrence@teisenhower.dev</div>
              <div>Start Awesomeness</div>
            </div>
          </a>
        </section>
        <section id="social">
          <Icon />
        </section>
      </div>
    </Layout>
    <Footer />
  </div>
)

export default IndexPage
