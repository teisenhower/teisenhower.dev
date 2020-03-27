## [Unreleased]

- Define better breakpoints in media queries
- Footer needed on desktop layout
- Sitemap
- Add contact email to footer
- Start planning out interaction events for users
- Change "Start Awesomeness" text to email and animation to "Start Awesomeness" on hover

## [0.1.4] - 2020-03-27

### Added

- "Start Awesomeness" functional
- CSS styling for `<a>` tags in [index.css](./src/pages/index.css)

### Changed

- CHANGELOG updated to use links to files referenced
- `awesomeButton` border changed to `1px` for mobile layout
- Homepage paragraph updated to new content. Still not 100% final version
- Unneeded code removed from [footer.js](./src/components/footer.js)
- Comparison Operators in `toggleNav()` function in [footer.js](./src/components/footer.js) changed to `===` due to ESLint Warnings on Gatsby build
- Social icons updated to all be the same size and positioned the same so they are uniform
- `awesomeButton` converted to `<a>` tag for `mailto` ability
  - `href="mailto:terrence@teisenhower.dev?subject=Awesome%20Project"`

## [0.1.3] - 2020-03-26

### Added

- Social icons, Nav and Copyright added to footer
- Logic to raise and lower footer
- New `darkGrey` color for footer background
- Site Title
- Favicon
- Gatsby Helmet added to [index.js](./src/pages/index.js) for site title and SEO
- Meta author and keywords added to helmet information

### Changed

- Class name added to `TEISENHOWER.DEV` in [nav.js](./src/components/nav.js) so it can be hidden when in mobile layout
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
