## [Unreleased]

- Mobile layout started. Social icons need added to footer
- Make "Start Awesomeness" button functional; connect to email
- Define better breakpoints in media queries

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
