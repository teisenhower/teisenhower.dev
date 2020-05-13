---
title: "How to use gatsby-source-s3 in your next Gatsby project"
longdate: "April 23rd, 2020"
date: "2020-04-23"
thumbnail: "aws-gatsby-source-s3.png"
keywords: "gatsby, react, aws, "
---

## gatsby-source-s3, what is it?

[gatsby-source-s3](https://www.gatsbyjs.org/packages/gatsby-source-s3/) is a plugin that enables you to access your AWS S3 Bucket and query the assets within it using [GraphQL](https://graphql.org/). Cool, so why use this? For me, I am using this alongside [gatsby-transformer-sharp](https://www.gatsbyjs.org/packages/gatsby-transformer-sharp) and [gatsby-source-filesystem](https://www.gatsbyjs.org/packages/gatsby-source-filesystem/), when combined these enable me to import images from my bucket directly into my project and then process them for this blog. I can compress images, convert them to .webp and serve them to devices that support it, along with much more.

In this walk-through, we will solely focus on getting you to successfully query your S3 Bucket and return all the assets within it.

## Prerequisites

In order to follow along you will first need to make sure you have a few things set up.

1. Have the Gatsby-CLI installed. We need this in order to perform tasks such as; run our dev server, build our project or download [Gatsby Starters](https://www.gatsbyjs.org/starters).

   - [Install Gatsby-CLI](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli)

1. Have NPM installed. NPM is a package manager and it is what allows us to download plugins for our projects.

   - [Installing NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

1. A S3 Bucket with some items; images, text files, really anything. If you're just starting out with AWS, they have some great free-tier options which will work for the sake of this tutorial. If you're creating a new Bucket, remember the name of your Bucket. You will need it later.

   - [AWS Free Tier](https://aws.amazon.com/free/)
   - [Creating a S3 Bucket](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html)

1. Your AWS Access Key ID and Secret Access Key. These are needed in order to give the plugin access to your S3 Bucket.

   - [Creating your Access Key ID and Secret Access Key](https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/)

1. And obviously a project to work with.
   - If you don't currently have a project started you can use the [Gatbsy hello-world Starter](https://github.com/gatsbyjs/gatsby-starter-hello-world). This is what I will be using for this tutorial.

## Getting your starter project

If you already have a project feel free to skip this section.

To get your Gatsby starter, run the command below. This is where the Gatsby-CLI comes into play. This will create a new Gatsby project for you titled `my-hello-world-starter` and it will use the starter project `gatsby-starter-hello-world`.

```bash
gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Once Gatsby has finished downloading your new project you should be presented with a message similar to the following

> Your new Gatsby site has been successfully bootstrapped. Start developing it by
> running:  
>  cd my-hello-world-starter  
>  gatsby develop

**Be sure to move into your new project directory `cd my-hello-world-starter` as this is where we will be working for the remainder of this tutorial.**

## Installing gatsby-source-s3

First we will need to install the plugin into our project using NPM.

```bash
npm install gatsby-source-s3 --save-dev
```

_The `--save-dev` saves the plugin as a development dependency_

Your `package.json` should now have the `gatsby-source-s3` plugin listed as a dev dependency.

> If you want to learn more about what a package.json file is, check out NPM's description [here](https://docs.npmjs.com/files/package.json) or [this one](https://nodejs.org/en/knowledge/getting-started/npm/what-is-the-file-package-json/) by NodeJS.

```json
  "devDependencies": {
    "gatsby-source-s3": "0.0.0",
  },
```

## Plugin Setup

Once the plugin has been installed we need to tell Gatsby to use this plugin. We do that by including it in our `gatsby-config.js`. The `gatsby-config.js` file is a file that is unique to Gatsby. It is where you save information such a metadata for you site and define your plugins.

> [Gatsby docs](https://www.gatsbyjs.org/docs/api-files-gatsby-config/) discussing gatsby-config.js

Inside of `gatsby-config.js` there will be an array with the name `plugins`. This is where you add all the plugins in which you want your Gatsby site to use. If you're using the [Gatbsy hello-world Starter](https://github.com/gatsbyjs/gatsby-starter-hello-world), this array will be empty.

```javascript
module.exports = {
  plugins: [],
}
```

Add the following to this `plugins` array.

```javascript
{
  resolve: "gatsby-source-s3",
  options: {
    aws: {
      //   leave these empty for now
      accessKeyId: "",
      secretAccessKey: "",
    },
    buckets: ["bucket-name"],
  },
},
```

For the time being, leave the `accessKeyId` and `secretAccessKey` empty. We will address these two next. In the `buckets` parameter, simply add the name of your S3 Bucket. You can find this within your S3 console.

Your `gatsby-config.js` should now look something like this.

```javascript
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-s3",
      options: {
        aws: {
          //   leave these empty for now
          accessKeyId: "",
          secretAccessKey: "",
        },
        buckets: ["bucket-name"],
      },
    },
  ],
}
```

## Safely securing AWS keys

Why did I have you leave your AWS access key and secret access key empty? Because we don't want to save these directly into our `gatsby-config.js`. Why? Because chances are you will be saving this project to some form of source control. Whether that be GitHub, GitLab, BitBucket, etc. and we don't want these keys publicly available. Even if you plan on having this project as a private repo, it's best practice to not commit this sensitive data.

To fix this, we want to store these keys in a different file that will be untracked by Git. These are called Environment or Config Variables and are typically saved in a file called `.env`. You'll also see `.env.local`, `.env.dev` or `.env.production`. You can have several of these files as your project grows. Containing different information for the different environments your project runs in.

For the sake of simplicity, I am going to create a single new file at the root of my project called `.env`

```text
Root Directory
| - node_modules/
| - src/
| - static/
| - .env <-- new file
| - .gitignore
| - gatsby-config.js
| - package-lock.json
| - package.json
```

Once we have this file created we want to configure Git to ignore this file. Again, we don't want these keys saved into our source control. Inside our `.gitignore`, we will add a pattern that will ignore all `.env` files. The \* is sometimes referred to as a wildcard. Meaning this pattern will match anything that comes after the .env; `.env.local` `.env.dev`. Making sure that all environment variable files are ignored.

```bash
# ignore all environment variable files
.env*
```

If you're using the Gatbsy hello-world Starter, this pattern will already be in your `.gitignore`

**Quick note**. Sometimes we do want and even need certain `.env` files to be saved in our source control since they contain data required for our project to function. Not all data in `.env` files is sensitive data. For these scenarios you would simply modify the names of your files and update your `.gitignore` to only ignore the files you want to be untracked by Git.

## Saving your keys into your new .env file

Inside this new file we are going to store all our sensitive data by `key value` pairs. What you save as the key is important as these will be the names we will later use to retrieve their corresponding values. I am calling mine `keyID` and `secretKey`. If you're using the same names, here is what your file should now look like.

```text
keyID = your-id
secretKey = your-secret-key
```

## Great. So how do we access these values?

In order to give `gatsby-source-s3` access to our keys, we use a package that is already a dependency of Gatsby [dotenv](https://www.npmjs.com/package/dotenv).

In order to utilize this package, we again need to first tell Gatsby to use it. This is again done by adding it to our `gatsby-config.js`. However, we won't be adding it in the same way we did our `gatsby-source-s3` plugin. Here we want to `require` it at the **very top of our file**.

```javascript
require("dotenv").config()
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-s3",
      options: {
        aws: {
          //   leave these empty for now
          accessKeyId: "",
          secretAccessKey: "",
        },
        buckets: ["bucket-name"],
      },
    },
  ],
}
```

If you named your file `.env` like I did above, this is all you need to do. However, if you decided to name your file something else like, `.env.aws`, `.env.dev` or `env.local`, _(which is totally fine if you did)_ then you are going to have to do a little more work. You need to tell `dotenv` to look for that specific file. You do that by setting the path parameter equal to the location and name of your file.

```javascript
require("dotenv").config({
  path: `your-file.env`,
})
```

Now that we have successfully required the `dotenv` package and configured it to reference the file containing our keys, we can now supply our `gatsby-source-s3` with those keys.

Going back to our `gatsby-source-s3` settings, we can now access these keys by adding `process.env.{your-key-name}` into the correct locations. This is where the name of those keys is important.

Your `gatsby-config.js` should now look something like this

```javascript
require("dotenv").config()
module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-s3",
      options: {
        aws: {
          accessKeyId: process.env.keyID,
          secretAccessKey: process.env.secretKey,
        },
        buckets: ["bucket-name"],
      },
    },
  ],
}
```

## What is process.env?

Quick detour..

`process.env` is an object that contains information about our environment. If you want to visually see this _(sometimes this helps to better understand what it is)_ add `console.log(process.env)` to your `gatsby-config.js` directly under where you required the `dotenv` package and run `gatsby develop`. You should see a ton of information get printed to your console. Including the keys we just defined our `.env`.

By saying `process.env` and appending `.your-key-name`, cherry picks that specific set of data from the rest of your environment data and returns the value within it.

## Back on track. Let's see this work

With everything installed and configured, you should now be able to run `gatsby develop` and have `gatsby-source-s3` access your S3 Bucket making all the assets in there available to you via GraphQL.

Once you've started your development server, go to [http://localhost:8000/\_\_graphql](http://localhost:8000/__graphql). You should now see 4 new values in your Explorer panel.

- allS3Image
- allS3Object
- s3Image
- s3Object

To have GraphQL return all of your assets run the following query. This will return all items found in your bucket. Images, folders, pdfs, etc.

- `Url` will return the url you can use to access the asset
- `Key` will return the name of the asset

```graphql
query S3Query {
  allS3Object {
    edges {
      node {
        Url
        Key
      }
    }
  }
}
```

Hopefully this returned some data for you. Here is an example of what that returned data could look like.

```graphql
{
  "data": {
    "allS3Object": {
      "edges": [
        {
          "node": {
            "Url": "https://s3.amazonaws.com/bucket-name/name-of-file.png",
            "Key": "name-of-file.png"
          }
        },
      ]
    }
  }
}
```

## Need help?

If you run into any issues or questions please feel free to reach out to me via [Twitter](https://twitter.com/teisenhower). I am more than happy to help.

Thanks!

<br>

### Photo Credit

### Header photo by [Nils Schirmer](https://unsplash.com/nilsschirmer) on Unsplash
