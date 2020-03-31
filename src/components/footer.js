import React from "react"
import style from "./footer.module.css"
import Nav from "./nav"
import Icon from "./icon"

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: "open",
    }
  }
  componentDidMount() {
    let windowWidth = window.innerWidth
    if (windowWidth <= 1200) {
      setTimeout(() => {
        this.setState({
          status: "closed",
        })
      }, 2000)
    }
  }

  toggleNav() {
    if (this.state.status === "open") {
      this.setState({
        status: "closed",
      })
    }
    if (this.state.status === "closed") {
      this.setState({
        status: "open",
      })
    }
  }

  render() {
    return (
      <footer className={this.state.status}>
        <span id={style.tab} onClick={() => this.toggleNav()}>
          <span
            id={style.arrows}
            className={"bounce arrows-" + this.state.status}
          >
            <span id={style.arrow} className={style.up}></span>
            <span id={style.arrow} className={style.down}></span>
          </span>
        </span>
        <Icon className={style.footerIcon} />
        <div id={style.copyright}>
          Copyright &copy; 2020 Terrence Eisenhower All Rights Reserved
        </div>
      </footer>
    )
  }
}
export default Footer