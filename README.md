# dogfinder-app
frontend app for the animal locator drone.

## Overview
1. This app is written in VueJS as a simple web application with reactive and interactive elements.
2. The goal is to display mission progress and allow users to look for their dog in detections coming from a drone.
3. The backend will be handled by a REST API and potentially some Socket-IO for more real-time communcations if needed.
4. We are using TypeScript which is just like Javascript but it supports actual typing like a ***real*** programming language.
   1. More on that https://www.typescriptlang.org/ 

## Contributing
1. To contribute you will need to know the basics of vuejs.
2. head over to https://vuejs.org/guide/quick-start.html to get started quickly.
  3. Play around with vuejs on your own before you start touching the repo to get a good idea of how it works.

### How to contribute
1. The code is located in the nested dogfinder-app folder.

#### Prerequisites
1. Install NodeJS
   1. This depends on your system. It's on you to figure out how to get nodejs up and running.
   2. Depending on how you installed nodejs you may also need to install `corepack`
   3. Try running `corepack enable` first to see if you already have corepack
   4. If you don't have it run this command
      1. `sudo npm -g install corepack`
      2. This also provides you with the `yarn` package manager which is what we use to manage a lot of the code
2. Get the code base
   1. cd into a folder where you want to work on the code.
   2. Clone the repo using git
      1. `git clone  https://github.com/animal-locator-drone/dogfinder-app.git`
      2. You can also just do this using vscode
3. cd into the code folder
   1. `cd dogfinder-app/dogfinder-app`
   2. or do this with vscode
4. install package dependencies
   1. `yarn`

#### Running the code in development mode

1. Run the dev server
   1. make sure you're in the right folder `dogfinder-app/dogfinder-app`
   2. `yarn dev`
      1. This will launch a dev server locally that you can access with the displayed url/port in the terminal.
      2. Open your browser to the displayed url of course. 

#### How the code is organized.

1. Everything in the root folder is configuration files and documentation
   1. except for the `index.html` file
      1. This is the entry point for the app.
2. `src` contains most of the typescript code base that makes up the app and it is also organized nicely. 
   1. `assets`
      1. contains static files like css and images
   2. `components`
      1. contains the smaller components that make up the bigger app.
   3. `router`
      1. Determines how you navigate the app breaking it into "views"
   4. `stores`
      1. These are local data management files that can be imported and shared between components
         1. more on that https://pinia.vuejs.org/
   5. `views`
      1. These are the overall structure that hold the `components`
   6. `App.vue`
      1. This is the main file for Vuejs this is where things start. 
   7. `main.ts`
      1. This file is how the app is initialized and we can add other extensions to vue such as the vue-router
3. `public`
   1. This is where the code that runs on the browser gets deployed. 
   2. You should never have to edit this folder this is outputted by vuejs
4. `node_modules` 
   1. this is where yarn packages are stored.
   2. Never touch these if you value your sanity. 
5. you may also see a `.vscode` folder this is where vscode settings get stored and has nothing to do with the project. 