import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Style from "./info.module.css"

export default () => {
  return (
    <div id="main">
      <Layout>
        <Nav />
        <section id={Style.services}>
          <h1 id={Style.title} className="white bold">
            THE REAL QUESTION..
          </h1>
          <hr></hr>
          <h2 className={Style.heading + " white bold"}>How Can I Help You?</h2>
          <p className="white">
            Like I mentioned earlier, I am a Full-Stack Developer meaning I’ll
            be there to help you through each phase of your new or current web
            project, big and small. Having a wide knowledge of technologies I am
            certain we can find a solution that exceeds all of your needs and
            expectations.
          </p>
          <div id={Style.detailsSection}>
            <div id="planning">
              <h2 className="orange bold">Planning / Goals</h2>
              <p className="white">
                Starting at square one we define your goals. What you’d like
                this project to accomplish for you or your business. From there
                I can give you a complete road map from start to finish. My
                recommendations on hosting, to domain names, technologies to
                use, etc. All coupled together creating your awesome project
                achieving those goals. At this point we will also be able to
                outline realistic timelines for each phase up until launch day.
              </p>
            </div>
            <div id="design">
              <h2 className="orange bold">Design</h2>
              <p className="white">
                We then move to the design phase. Whether you already have a
                look and are simply wanting a refresh or need the full
                treatment.{" "}
                <span className="highlight">
                  <a
                    href="http://www.santanabrand.co"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <em>(Need a logo? I know a guy for that..)</em>
                  </a>
                </span>{" "}
                All designs are responsive for mobile friendliness. Did you
                know, over half of users today are viewing websites from their
                phones and tablets.
              </p>
            </div>
            <div id="performance">
              <h2 className="orange bold">Performace</h2>
              <p className="white">
                Performance is also a big factor. I take great care and pride in
                ensuring all projects are extremely efficient resulting in fast
                load speeds creating a stress free experience for your users.
                This also gains you a boost in SEO performance, the thing that
                helps potential clients find you.
              </p>
            </div>
          </div>
          <section>
            <h2 className={Style.heading + " white bold"}>
              Looking for a WordPress solution?
            </h2>
            <p className="white">
              I can cover that as well. I have worked on several WordPress
              projects creating custom themes from scratch. No templates that
              other sites have, ensuring that your project is truly authentic
              and totally yours.
            </p>
          </section>
          <section>
            <h2 className={Style.heading + " white bold"}>
              Worried you’ll need support after your launch?
            </h2>
            <p className="white">Don’t be, I can be there for that as well.</p>
          </section>
          <section id={Style.technical}>
            <h2 className={Style.heading + " white bold"}>
              Nitty-Gritty Nerdy Details For The Technical Folks
            </h2>
            <p className="white">
              I am knowledgeable in several languages, to name the relevant
              ones. <span className="orange">PHP</span>,{" "}
              <span className="orange">Javascript</span>,{" "}
              <span className="orange">C++</span> and of course{" "}
              <span className="orange">HTML</span> and{" "}
              <span className="orange">CSS</span>. Currently I am incorporating{" "}
              <span className="orange">Java</span>,{" "}
              <span className="orange">Python</span> and{" "}
              <span className="orange">Ruby</span> into my arsenal as well.
            </p>
            <p className="white">
              I have worked with several Javascript and CSS frameworks and
              libraries such as <span className="orange">React</span>,{" "}
              <span className="orange">Gatsby</span>,{" "}
              <span className="orange">Express</span>,{" "}
              <span className="orange">Bootstrap</span>,{" "}
              <span className="orange">Semantic UI</span>.
            </p>
            <p className="white">
              Experience with database management using both MySQL and NoSQL
              databases. <span className="orange">MySQL</span>,{" "}
              <span className="orange">MongoDB</span>,{" "}
              <span className="orange">Oracle</span>,{" "}
              <span className="orange">Maria</span>.
            </p>
            <p className="white">
              Worked with Cloud Technologies such as{" "}
              <span className="orange">AWS</span>. I have two projects currently
              utilizing AWS, this site you’re currently enjoying for my hosting
              and asset storage and the site I built for{" "}
              <span className="highlight">
                {" "}
                <a
                  href="https://www.eaglesports.biz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Eagle Sports and Awards
                </a>
              </span>
              .
            </p>
            {/* <p className="white">
              For a more detailed overview of my credentials please download a
              free copy of my <span className="bold highlight">resume</span>.
            </p> */}
          </section>
          <section id={Style.cta}>
            <h2 className="white bold">
              Ready to start your on your next big project?
            </h2>
            <h3 id={Style.email} className="orange">
              terrence@teisenhower.dev
            </h3>
          </section>
          <section id={Style.questions}>
            <h3 className="white bold">Still have questions?</h3>
            <p className="white">
              There is a lot of jargon thrown around when it comes to web design
              and development which results in some confusion and uncertainty.
              So if you do still have questions please feel free to send me an
              email. I would be more than happy to hear any and all questions.
            </p>
          </section>
        </section>
      </Layout>
      <Footer />
    </div>
  )
}
