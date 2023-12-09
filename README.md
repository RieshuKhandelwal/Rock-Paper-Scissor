# Rock Paper Scissors Game

## Overview
This is a simple and fun Rock Paper Scissors game that you can play in your web browser. The game is built using HTML, CSS, and JavaScript.

## How to Play
1. Open the HTML file in your web browser.
2. You will see three choices: ROCK, PAPER, and SCISSOR. Click on the choice you want to play.
3. The computer's choice is generated randomly.
4. The result of the game is displayed on the screen. If you win, the message will be displayed in green. If you lose, the message will be displayed in red.

## Game Rules
- If both the user and the computer make the same choice, it's a draw.
- Rock crushes Scissors but is covered by Paper.
- Paper covers Rock but is cut by Scissors.
- Scissors cut Paper but are crushed by Rock.

## Code Structure
- The HTML file sets up the game interface in the browser.
- The CSS file (not provided) is used for styling the game interface.
- The JavaScript file contains the game logic.

## JavaScript File
- `userscore` and `compscore` are variables that keep track of the user's and computer's scores respectively.
- `choices` is a node list of the choice elements.
- `MSG`, `USERSCORE`, and `COMPSCORE` are the message, user score, and computer score elements respectively.
- `generateCompChoice` is a function that generates the computer's choice.
- `showWinner` is a function that shows who the winner is and updates the scores and message element.
- `playGame` is a function that contains the game logic.
- An event listener is added to each choice element that calls the `playGame` function when the choice is clicked.
