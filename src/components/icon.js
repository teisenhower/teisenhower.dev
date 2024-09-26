import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as styles from './icon.module.css'

const Icon = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          social {
            github
            stack
            twitter
            journal
          }
        }
      }
      allFile(
        filter: { relativeDirectory: { eq: "images/social" } }
        sort: { fields: [name], order: ASC }
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
  const links = data.site.siteMetadata.social
  return (
    <div>
      {data.allFile.edges.map(file => {
        const url = links[file.node.name]
        return (
          <a
            key={file.node.name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.socialIcon}
              key={file.node.name}
              src={`${file.node.publicURL}`}
              alt={`${file.node.name}-logo`}
            />
          </a>
        )
      })}
    </div>
  )
}

export default Icon
