# Frogger Arcade Game

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

There are generally no prereqs to get the game up and running in development. For development, a text editor such as SublimeText or Visual Studio Code is recommended.

If you simply wish to play the game, it is recommended that you use the most current version of Google Chrome Browser and ensure that JavaScript is able to run.

### Installing

1. Clone the repository
``` git clone https://github.com/hollywoodno/frogger-game.git ```

For developers looking to work on the project follow the below steps. For users looking to play the game, read the section on *'How to play the game'*.

#### Setting up development

1. This game is primarily written in ES5 for purposes of practicing ES5 prototypical inheritance. It will eventually be moved fully to ES6 using the new class syntax. The major files for development include the *Engine, Entity, Enemy, and Player files*.

*Engine*: Responsible for creating the animated effect

*Enity*: Base class for the enemy and player, add code here that will be shared across all entites involved in the game

*Enemy*: Consists of the base enemy class and the basic bug enemy. Adding new enemies will be placed here.

*Player*: The player class. Currently a basic player is supported. New player features should be added here.

#### How to play the game
1. To get the game running in your browser, navigate to the root of the cloned directory. There you should find the index.html file.

2. Double click the index.html file to load the game in your browser. The gameboard should appear.

3. If the gameboard doesn't appear, make sure that JavaScript is able to run in your browser. 

## Acknowledgments

* Game engine provided by Udacity

