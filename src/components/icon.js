import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./icon.module.css"

const Icon = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            stack
            gitlab
            twitter
          }
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "images/social" } }
        sort: { fields: [name], order: DESC }
      ) {
        edges {
          node {
            publicURL
            name
          }
        }
      }
    }
  `)
  return (
    <div className={style.socialIcons + " alpha " + className}>
      {data.allFile.edges.map((file, index) => {
        const { github, stack, gitlab, twitter } = data.site.siteMetadata.social
        let url = eval(file.node.name)
        return (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <img
              className={style.socialIcon}
              key={`social-${index}`}
              src={`${file.node.publicURL}`}
              alt={`${file.node.name}-logo`}
            ></img>
          </a>
        )
      })}
    </div>
  )
}

export default Icon
