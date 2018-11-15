![Calculator Screenshot](/src/images/calculator-screenshot.png)


# React Calculator

This project is bootstrapped using [create-react-app](https://github.com/facebook/create-react-app)

## See a live version of this project on Codepen

[Codepen](https://codepen.io/NatalieSalemme/pen/xymzvp)
## Technologies Used:

React & CSS

## How to begin

Inside project `root` directory run `npm install`. After all dependencies are installed run `npm start`. A new browser window should open.

## Project structure

### App.js

`App.js` manages the state for the whole application and handles all the functions for the app and the state is passed down via props.

### Components

The components folder contains `ButtonsList.js`, `Footer.js`, and `Title.js`. These are all functional stateless controlled presentational components. They all get their data from props passed down from App.js.


## User Stories

User is able to:

-Use various buttons to perform equations: All Clear, Clear, divide, multiply, subtract, add, and compute.

-See if there is an error, there will be a pop-up that tells the user why they received an error. User will then be able to fix it by clearing the whole display with the All Clear button, or will be able to delete the last inputted character, with the error message disappearing

-See the word "ERROR" printed on the display if they have either inputted too many characters or the calculated output is too long for the display. There will also be an error to show them

-Get an error message if they try to enter two decimal places in a row. The error will let the user know that they are not able to enter two decimal places in a row and user will be able to enter another number or symbol
