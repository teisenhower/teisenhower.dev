import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import style from "./icon.module.css"

const Icon = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
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
        filter: { extension: { eq: "png" } }
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
    <div className={"clearFix " + style.socialIcons}>
      {data.allFile.edges.map((file, index) => {
        const { github, stack, gitlab, twitter } = data.site.siteMetadata.social
        let url = eval(file.node.name)
        return (
          <a href={url} target="_blank" rel="noopener noreferrer">
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
