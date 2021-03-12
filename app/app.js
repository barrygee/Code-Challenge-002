const { groupArrayElements } = require('./groupArrayElements');

// called when the node application runs
const go = () => {

    // define inputs for the groupArrayElements function
    const data = ['t','w','i','g','e','d','u','c','a','t','i','o','n'];
    const groupSize = 2;

    try {
        const output = groupArrayElements(data, groupSize);
        console.log(output)
    } catch(error) {
        // catch errors thrown within the groupArrayElements
        // display the error message
        console.log('Error:', error.message);
    }
}

go();