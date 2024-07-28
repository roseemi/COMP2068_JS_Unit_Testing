# COMP2068 - JavaScript Unit Testing Tutorial

This module will teach you how to perform basic unit testing using the testing framework Jest. This repo will have the functions prepared for demonstration. The goal of this tutorial is to learn to program unit tests and not the functions that need to be tested.

You will need the following technologies for this tutorial:
- VS Code
- Node.js
- NPM
- Jest

## Step 1. Clone this repository

Clone this repository on your machine with the following command:

```git clone https://github.com/roseemi/COMP2068_JS_Unit_Testing.git```

Open the package with VS Code. 

## Step 2. Install the Jest framework

To access the terminal and install Jest in the VS Code environment, open your terminal with **Ctrl + `** OR on the menu bar press **Terminal -> New Terminal**.

Then in the terminal, type in the following command:

```npm i jest -D```

Just to breakdown the command, the following will explain each part:
- npm = node package manager
- i = install
- jest = the framework to be installed
- -D = saving the framework / library as a devDependency (meaning the package is only for development and will not be a part of the public build)

## Step 3. Change test value in package.json

Change the test value under scripts in package.json to "jest".

![Image of scripts objects in package.json](image.png)

## Step 4. Create the test file

For the test file, it is important to match the test file name to the file you're testing. For example:

If the file name you're testing is fun.js, then the testing file would be named fun.test.js.

So with that in mind, create the test file for the tutorial file provided.

## Step 5. Export the functions

Before writing any tests, make sure the functions to be tested are exported within an object. 

To do so, you have to use the following in the final line of the file:

```module.exports = {}```

The functions' name will fit in the curly branches separated by commas for more than one function. It should look something like this:

```module.exports = { function1, function2, ... }```

## Step 6. Import the functions to be tested to the test file

Import the functions to be tested by putting this line on the very top of your testing script:

```const { *PUT FUNCTIONS HERE* } = require('*PUT FILE PATH HERE*')```

## Step 7. Create the test

Creating the test is very simple. It is structured like this:

```
test('*ADD COMMENT HERE TO DEFINE TEST AND OUTCOME*', () =>{
    expect(*FUNCTION( ARGUMENT1, ARGUMENT2, ...)*).toBe(OUTCOME)
});
```

## Step 8. Run the test

Go back to the terminal. To run the test, you have to use the following command:

```npm test```

The result of the test will display in the terminal.

## Step 9. Fix your code (If tests went wrong)

This step is only for if your test failed! If the outcome of the test failed, then you should check if the expected outcome is right, the arguments in the test is right, or if the function is right.

That's it! You finished a simple unit testing.