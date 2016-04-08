# Rubicon app for Mobilizing Volunteers
![rubicon-icon](client/public/assets/X.png)

This application is meant to help Team Rubicon mobilize its members during an active disaster as quickly as possible.

- deployed [here](https://gilson.herokuapp.com)

## Team Gilson
- Mike, Eliott, Sean, Malek, Brandon


---

Table of Contents
-----------------
1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Tech Stack](#tech-stack)
4. [Webpack](#webpack)
5. [Troubleshooting](#troubleshooting)
6. [Contributing](#contributing)


Getting Started 
---------------
Clone the repo and install the necessary node modules:

```shell
$ git clone https://github.com/the-gilsons/rubicon-app.git
$ cd rubicon-app
$ npm install                   # Install Node modules listed in ./package.json
$npm run build                   # Build React Bundle
$npm start                   # Server will run on local host:3000
```

Usage
-----
-Once the page is loaded, to send emails, drop a .csv or .txt spreadsheet file into the DropZone
-Enter in your DocuSign Credentials as well as the Template Info (previously set up on the DocuSign dashboard)
-Hit the 'Send Emails' Button to deliver Waiver forms to all emails in the csv list

Tech Stack
----------
Some technologies we used:
  * [React](https://facebook.github.io/react/) for unidirectional data flow and performant UI
  * [Babel](https://babeljs.io/) to transpile ES6/7 syntax
  * [Webpack](https://webpack.github.io/)
  * [Node](https://nodejs.org/en/)/[Express](http://expressjs.com/en/index.html) server


Webpack
-------

The webpack compiler configuration is located in `~/build/webpack`. Here you'll find configurations for each environment; `development`, `production`, and `development_hot`. These configurations are selected based on your current `NODE_ENV`, with the exception of `development_hot` which will _always_ be used by webpack dev server.

**Note**: There has been a conscious decision to keep development-specific configuration (such as hot-reloading) out of `.babelrc`. By doing this, it's possible to create cleaner development builds (such as for teams that have a `dev` -> `stage` -> `production` workflow) that don't, for example, constantly poll for HMR updates.

So why not just disable HMR? Well, as a further explanation, enabling `react-transform-hmr` in `.babelrc` but building the project without HMR enabled (think of running tests with `NODE_ENV=development` but without a dev server) causes errors to be thrown, so this decision also alleviates that issue.

Troubleshooting
---------------

Having an issue? Please let us know! Report it and we'll get to it as soon as possible.

Contributing
------------

If you would like to submit a pull request, please make an effort to follow the guide in [CONTRIBUTING.md](CONTRIBUTING.md).


Thanks for checking this out.

- Mike Gilson, Malek Gilson, Pledge Gilson, Smelliot Gilson && Gilson Gilson





