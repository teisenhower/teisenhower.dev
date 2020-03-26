## [Unreleased]

- Make "Start Awesomeness" button functional; connect to email
- Define better breakpoints in media queries

## [0.1.3] - 2020-03-26

### Added

- Social icons, Nav and Copyright added to footer
- Logic to raise and lower footer
- New `darkGrey` color for footer background
- Site Title
- Favicon
- Gatsby Helmet added to `index.js` for site title and SEO
- Meta author and keywords added to helmet information

### Changed

- Class name added to `TEISENHOWER.DEV` in Nav so it can be hidden when in mobile layout
- Original `darkGrey` color variable changed to `grey`
- Top margin removed from `welcome` section, margin added to `main` media query
- Social icons added to a 'social' folder so they can be queried separately
  - GraphQL query to grab social icons changed to `relativeDirectory: { eq: "social" }`

## [0.1.2] - 2020-03-25

### Added

- Basic media queries to start mobile layout

### Changed

- Headshot changed from fixed to fluid in gatsby-image
- Headshot accent `border` property changed to `outline` property
- Theme color changed to grey `#191919` in gatsby-config
- About section changed to `display: grid`. This was the fix needed to remove `clearfix`
  - `awesomeButton` and `p` now use `justify-self` property for alignment
  - `width: max-content` removed from `awesomeButton`
- `content` property `grid-template-rows:` value changed to `auto 12rem auto 1fr;`
- Main elements `me`, `headshot`, `welcome`, etc. changed to `<section>` tags vs `<div>`

### Fixed

- Removed `clearfix` on social icons

## [0.1.1] - 2020-03-24

### Changed

- Refactor css into modules
- Homepage elements using CSS Grid to allow reordering for mobile layout

### Fixed

- Unused CSS Classes and IDs removed

## [0.1.0] - Initial Build

### Added

- Homepage layout/structure
- URLs to social icons on homepage
- `webp` function to headshot `gatsby-image` with use of `...GatsbyImageSharpFixed_withWebp` fragment
