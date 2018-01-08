# 2 - setting up a Node/Express dev environment

#### What is the Express development environment

The env consists of an installation of Node.js, npm, and optionally Express Application Generator.

Npm will install Express as a dependancy and can be used to install Express Application Generator globally; a handy tool
for creating skeleton Express apps in the MVC pattern.

#### What OS's are supported

Node can be run on Windows, Mac, OS/X, many flavors of Linux. Docker, etc. 

#### What version of Node.js should you used

Generally you should use the most recent long term supported (LTS) release.  For Express always use the latest version.

#### What about databass and other dependancies

Other dependancies such as database drivers, template engines, authentication engines, etc. are part of the application
and are imported into the environment using the NPM package manager.  tbd later.

### Installing Node

N/a as I am on Cloud9

### Using NPM 

Next to Node itself NPM is the most important tool for working with Node applications. NPM is used to fetch any packages 
that an application needs for development, testing, and/or production.  While you may use NPM to manually fetch each tool, 
typically we instead manage dependancies using a plain-text defenition file called pacakge.json.

The file itself lists all the dependancies for a particular Javascript 'package', including the packages name, version, description, 
intial file to execute, production dependancies, development dependancies, versions of Node it can work with, etc.  The
**package.json** file should contain everything NPM needs to fetch and run your application.

#### Adding dependancies

Following show how to install dependancies

```
mkdir myapp
cd myapp
```

use npm init command to create a package.json file for your application.  This command promots you o do a number of things name the pp etc.

```
npm init
```

now install the express library in the myapp directory

```
npm install --save express
```

to use the library we use the ```require()``` fucntion as shown below:

```javascript
// app.js

const   express = require("express");

```

app.js:
```javascript
// app.js

const   express = require("express"),
        app = express(),
        port = process.env.PORT;
        

app.get('/', (req, res) => {
    res.send('hello from Express');
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

```
Above is a minimal 'hello world' application.  Start the server by:

```
node app.js
```
#### Development dependancies

If a dependacy is only used during development, for example nodemon (which is used to restart the application after file changes), 
it chould be saved as a development dependacy instead of a dependacy so users don't have to install it on production. Another
popular example is ```ESlint``` the popular Javascript linting tool.

```
npm install --save-dev nodemon eslint
```

#### Running tasks 

In addition to defining and fetchin dependacies you can also define named scripts in your **package.json** files and call 
NPM to execute them with the run script command. This approach is commonly used to automate running tests and parts of the 
development build or toolchain. 

example in package.json;
```
'scripts'{
    'dev': 'node app.js'
}
```

### Installing Express application generator 

The Express Application Generator tool generates an Express app 'skeleton'.  Install it globally so that you can call it from 
anywhere.

```
npm install -g express-generator
```
To create the app named 'helloworld' naviage to a the root directory you want the app to live and run: 

```
express helloworld
```

> **Note:** you can also specifiy the template library to use and a number of other setting. Use the help
> command ```express --help``` to see all the options.

```
express helloworld --view=pug
```
Will create a helloworld with pug as view engine

**The time savings is super minimal using the generator.  don't think it's even worth fooling with.  i prefer
manually creating a skeleton.**

# 3- The Local Library website

In this series of articles:

  * Use Express Application Generator to create a skelton website and an application
  * Start and Stop the Node server
  * Use a db to store app data
  * Create routes for requesting different information, and templates ('views') to render
    data as HTML to be displayed later.
  * Work with forms
  * Deploy application to production

###  The Lcoal Library Website

_LocalLibrary_ is the name of the website we'll create and evolve over the course of the tut. The purpose of the site
is to provide an online catalog of a small local library where users can browse available books and manage their accounts

This is example has been carefully chosen b/c it can scale to to show as much or as little detail as we need, and can be used to show off
almost any _Express_ feature. More importantly, it allows us to provide a guided path to any functionality you'll need in any website.

  *  In the first few tutorial articles we'll develop a simple _browse-only_ site where users can find out what books are available.
     These operatoins are common to almost every website: reading and displaying content from a database.
  *  As we progress the library example naturally extends to demonstrate more advanced web features. For example we can extend
     the library to allow more books to be created and use this to demonstate how to use forms and support user authentication.


    




