# Prototyping Skeleton

**Work in progress. Don't use.**

A skeleton for protyping applications for user testing. Runs easily on a Mac set up to serve sites on a local network from the default Apache web server and PHP install. Follow [this guide](https://discussions.apple.com/docs/DOC-3083) to get set up. It uses Sass for faster CSS, jQuery for easier JavaScript, and Grunt to compile assets. It also uses [TaffyDB](http://www.taffydb.com/) to mimic simple database features using JSON.

## Install Sass

Sass is a Ruby gem and can be easily installed on most Macs by running the following in Terminal.app:

```shell
gem install sass
```

## Install Grunt and modules

Grunt requires Node JS to run. A quick installer can be found [here](http://nodejs.org/). Once Node is installed you can install Grunt from Terminal.app by running the following:

```shell
npm install -g grunt-cli
```

The grunt tasks in this skeleton require several modules to run. Once Node and Grunt are installed you can install them by running the following in Terminal.app:

```shell
cd ~/Sites/prototyping-skeleton
npm install
```

## Run Grunt

To run Grunt tasks during development run the following in Terminal.app:

```shell
cd ~/Sites/prototyping-skeleton
grunt
```