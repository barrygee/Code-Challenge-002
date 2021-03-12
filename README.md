# Twig Education Code Challenge: Node.js #

## Running the code ##

**Install dependencies:** `npm install`
\
\
**Run the code:** `npm start`
\
\
**Run the unit tests:** `npm test`
\
\
**Check unit test coverage:** `npm run coverage`

\
**app.js**

The go function within app.js is run when the application starts. It's purpose is to simply demonstrate how the groupArrayElements function can be used within an application. 

Updating the data Array and groupSize values will allow you to manually test the outputs of the function based on the a variety of different input values. The unit tests included also cover this. 

The file:
- Imports the groupArrayElements function and defines the input attributes to pass into it
- Console logs out successful output from the function
- Catches and outputs errors thrown by the function

\
**groupArrayElements.js**

- Validates the inputs provided to the function and throws an error with a suitable message when invalid data is provided
- Loops through the array provided to the function in a step size defined by the groupSize parameter
- On each loop of the data Array, a slice is pushed as a child array to the 'groupedArrays' Array that is returned by the function once the loop through the data array is complete 

\
**Unit tests**

The unit tests included, cover a variety of inputs, test data validation, error and successful outcomes

The unit tests can be run with the command: `npm test`

A test coverage check can be run with the command: `npm run coverage`