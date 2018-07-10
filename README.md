# Frogger Arcade Game

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

For development, Node.js is required for installing packages. A text editor such as SublimeText or Visual Studio Code is recommended.

If you simply wish to play the game, it is recommended that you use the most current version of Google Chrome Browser and ensure that JavaScript is able to run.

### Installing

1. Clone the repository: navigate to your systems terminal and type the command
  
``` git clone https://github.com/hollywoodno/frogger-game.git ```

For developers looking to work on the project follow the below steps. For users looking to play the game, read the section on *'How to play the game'*.

#### Setting up development

This game is primarily written in ES5 for purposes of practicing ES5 prototypical inheritance. It will eventually be moved fully to ES6 using the new class syntax, for these reasons the project uses TypeScript for local development. You are encourage to do the same. 

1. Install the necessary packages: navigate to the root directory of the project
where the tsconfig.json file is located. Then type the following command
  
  
```npm install```
  
  
2. Build the code: navigate to the root of the project directory where the tsconfig.json file is located. Then type the following commands
  
  
```npm run build```
  
  
```npm run start```


These commands build the files needed to run the application. It also places both TypeScript and webpack in watch mode, so that changes you make are immediately handled. 

3. At this point, you can view the application in one of two ways. 

    - Simply navigate to the build files. The build files are located at the root of the directory under /dist. Double click on the *index.html* file. If a web browser is set as the default application to handle .html files, then you should see the app open in your default browser. If not, you may try right clicking on the file and choose to open it in a browser of your choice. 

    - If you are running a server, launch the server and navigate to the server url and under root/dist directory. This should open the application.

5. For instuctions on how to play the game, head to the section *'How to play the game'*. 

#### The major files for development are located under the *src* directory. They include the *Engine, Entity, Enemy, and Player files*.

*Engine*: Responsible for creating the animated effect

*Resources*: Responsible for caching images

*Enity*: Base class for the enemy and player, add code here that will be shared across all entites involved in the game

*Enemy*: Consists of the base enemy class and the basic bug enemy. Adding new enemies will be placed here.

*Player*: The player class. Currently a basic player is supported. New player features should be added here.

#### How to play the game
*More details to come...*
  
In the meantime preview this video here
   
[Basic Frogger Game](https://www.youtube.com/watch?v=kaifTslArtY)


## Acknowledgments

* Game animation (Engine.js) is provided by Udacity as well as all images and the resource loader (Resource.js)
* The UI overlays were based on and inspired by https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp*/

