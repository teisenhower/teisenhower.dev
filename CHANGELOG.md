## Unreleased

- Hover effects on blog posts
- Refine CSS grid spacing for Blog Items
- Sitemap
- Add contact email to footer
- Start planning out interaction events for users
- Markdown css updates
- Refactor CSS
- Need to add downloadable resume

## [0.2.1] - 2020-04-23

## Added

- New blog post. gatsby-source-s3

## Changed

- Updated some CSS in the blog posts. Was not looking that great once it was full with code blocks

## Fixed

- Removed CSS in index that would have prevented users from copying text from the blog posts `user-select: none;`
- Query to source S3 images update to allow a max width of 1500px. Default is 800px which was causing images on large screens to look blurry

## [0.2.0] - 2020-04-10

v0.2.0 is now deployed version. This version features the new services, about and blog pages.

## Changed

- S3 bucket changed to production bucket

## [0.1.11 - soft launch] - 2020-04-09

### Added

- Services page
- Wrote content for both About and Services pages
- Home link to both footer and header navs

### Changed

- .gitignore updated to now include `posts` files. Needed to build phase

## [0.1.10 - soft launch] - 2020-04-06

### Added

- Prismjs added for syntax highlighting `gatsby-remark-prismjs` `prismjs`
- [gatsby-browser.js](gatsby-browser.js) added to include the Prismjs css file [prism-tomorrow.css](https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism-tomorrow.css)
- Changed the default [prism-tomorrow.css](https://github.com/PrismJS/prism/blob/1d5047df37aacc900f8270b1c6215028f6988eb1/themes/prism-tomorrow.css) slightly. Made background my color grey and put an orange border-left to follow my design.
- Custom scroll bar styling
- Hover effects on Nav items. Underline follow

### Changed

- Click location to blog posts changed from their titles to the images
- Dates changed to `longdate` format. Still using numbered dates for ordering posts

## Fixed

- Footer Nav open on each page load. Using Local Storage to set value if a user has been to the site before. Only shows open on load if no value set.

## [0.1.9 - soft launch] - 2020-04-03

### Added

- Logic added to create blog pages from data; `createPages`
- Logic added to create slugs for blog posts; `onCreateNode`
- Links added to BlogItems to Post
- Slug field added to [blog.js](./src/pages/blog.js) GraphQL query
- Blog Post template added; [blogPost.js](./src/templates/blogPost.js)
- [index.css](./src/pages/index.css) updated so elements such as h tags and lists are no longer being globally styled. Markdown renders were inheriting these styles.

## [0.1.8 - soft launch] - 2020-04-02

### Added

- Installed `gatsby-source-s3` in order to pull in images from my S3 bucket
- Added environment variables for AWS keys

### Changed

- GraphQL query in [blog.js](./src/pages/blog.js) updated in order to pull images from S3 Bucket and process them
- Image in [blogItem.js](./src/components/blogItem.js) updated from `<img>` tag to a Gatsby `<Img>` component
- `.map()` in [blog.js](./src/pages/blog.js) updated to pass the new images data from the new GraphQL query

## [0.1.7 - soft launch] - 2020-04-01

### Added

- Blog page added. Pulling and displaying Markdown data from `post` directory. Installed `gatsby-transformer-remark`
- Footer added to Blog page

### Changed

- [gatsby-config](./gatsby-config.js) `gatsby-source-filesystem` plugin updated so its path is set to `src` not `images`. Headshot and Icon GraphQL queries needed updated
- ID added to homepage paragraph so all `<p>` elements weren't inheriting its style - `#mainParagraph`
- Links added to Nav

### Fixed

- Issue of footer starting in middle of screen

### New Files

- [blog.js](./src/pages/blog.js)
- [blog.module.css](./src/pages/blog.module.css)
- [blogItem.js](./src/components/blogItem.js)
- [blogItem.module.css](./src/components/blogItem.module.css)

## [0.1.6 - soft launch] - 2020-03-31

#### This version is using branch "launch"

### Added

- Google Analytics using `gatsby-plugin-google-analytics`
- Some slight animations have been added
  - Dissolve text and icons
  - Headshot outline
  - Divider bar

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
