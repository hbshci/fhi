[![Stories in Ready](https://badge.waffle.io/codekiln/fhi.png?label=ready&title=Ready)](https://waffle.io/codekiln/fhi)
# Forum on Health Care Innovation Website
This repository contains the source code for the Forum on Health Care Innovation website. To see the work in progress, please see the todos at [Waffle.io](https://waffle.io/codekiln/fhi).

## Building the website
To build the website: 
0.  Install [Node JS](http://nodejs.org/), which is available on all plaforms. Node is server software. 
0.  Install [Git](http://git-scm.com/), which is available on all platforms. Git is software for managing versions of software that is being written.
0.  Open a command prompt or terminal. If on Windows, use git. If on Mac, use terminal.
0.  Type in `cd ~` and then `git clone git@github.com:codekiln/fhi.git`. 
0.  Type in `cd fhi` and then `npm i` to install the dependencies for the project. 
0.  Type in `grunt design`. This should open up a web browser that contains the web page. You may now edit the text files, save them, and watch the page reload with the new changes reflected. At this point, you can copy the contents of the _gh_pages directory into any server and the website will run as you see.

## Deploying the website
If you have access to a conventional server, you can copy the _gh_pages directory onto the server. The site is currently served on Github. To deploy the website on github, you need to:
0.   Type in `cd _gh_pages`. 
0.   Make a new revision and push it to the gh-pages branch. `git add -A`, `git commit -m "my commit message"`, `git push origin gh-pages`. 