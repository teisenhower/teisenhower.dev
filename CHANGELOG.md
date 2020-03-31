## [Unreleased]

- Sitemap
- Add contact email to footer
- Start planning out interaction events for users
- Footer shows in middle of screen before page fully loads. Due to `open` class not being on footer, may need to update `componentDidMount()`

## [0.1.6 - soft launch] - 2020-03-31

#### This version is using branch "launch"

### Added

- Google Analytics using `gatsby-plugin-google-analytics`

### Changed

- Since this is the soft launch version, the blog and projects pages are not included. Because of this, the nav has been removed from this version
- The Social Icons in the footer have been enlarged to accommodate for this missing nav
- Footer modified so if on mobile the footer is open for 2 seconds then closes. The hope is this will alert users to interact with this element.

## [0.1.6] - 2020-03-31

### Added

- [404](./src/pages/404.js)
- Font weight `200` _extra light_ for 404 page

## [0.1.5] - 2020-03-30

### Added

- Classes on `Nav` and `Icon` components in [footer.js](./src/components/footer.js) so their display can be set to `none` when not on mobile. Classes passed as props
- Code refactored to display footer on desktop layout without the Nav and Icons included
- Awesome Button changes from email to "Start Awesomeness" on hover

### Changed

- [footer.js](./src/components/footer.js) now includes `componentDidMount()` function that will set footer to `open` if screen width is larger than `1200px`
- Copyright font-sized enlarged
- Footer arrow tab widened on mobile
- New CSS breakpoints and settings within those breakpoints tweaked to improve layout. Not finalized

### Removed

- `root` font-size change for large screen sizes removed from [index.css](./src/pages/index.css)
- Unneeded/Duplicate CSS

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
