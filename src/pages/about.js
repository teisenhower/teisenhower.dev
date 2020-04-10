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
        <section id={Style.about}>
          <h1 id={Style.title} className="white bold">
            HELLO AGAIN!
          </h1>
          <p className="orange">
            I take it since you’re on this particular page you’d like to know
            more about me..
          </p>
          <hr></hr>
          <h2 className={Style.heading + " white bold"}>
            Let me formally introduce myself
          </h2>
          <p className="white">
            My name is Terrence Eisenhower. I am from York, Pennsylvania. More
            specifically a little town called Wrightsville. I graduated from
            Eastern York High School in 2008 and immediately started college
            that fall pursuing a degree in Digital Arts from The Art Institute
            of York.
          </p>
          <p className="white">
            While in college I had two courses that looking back on them now
            should have been a turning point in my career. Web design and a
            course devoted to Flash. I remember during my web design course
            being really intrigued about the world of web. I enjoyed seeing what
            combinations of HTML and CSS I needed in order to create what I had
            sketched down on my overpriced notepad from the school store. Prior
            to this I had some insight into this HTML and CSS world all thanks
            to the social platform, MySpace. I am sure a lot of the developers
            today could attest to the same.
          </p>
          <p className="white">
            Then in my Flash course, I was introduced to ActionScript. I was
            hooked, I couldn’t seem to pull myself away from it. And honestly, I
            was really good at it. This was before I knew about the plethora of
            knowledge on sites like StackOverflow so all I had was my Flash
            book. I remember scanning those pages trying to find something that
            sounded like what I was trying to accomplish. This should have been
            where the proverbial light bulb went off. A hint telling me that
            this is something I should seriously look into. But I was certain I
            would end up at an agency working on big company brandings. I was
            hell-bent on being a top notch designer somewhere, not a person that
            looks at code all day. And now look at where we are.. I couldn't
            imagine doing anything else.
          </p>
        </section>
      </Layout>
      <Footer />
    </div>
  )
}
