function groupArrayElements(data, groupSize) {

    // validate function inputs
    if (!data) { throw new Error('An array is required'); } 
    else if (!groupSize || 
              groupSize < 0 || 
              Number.isInteger(groupSize) !== true) { throw new Error('An invalid groupSize value was provided'); }
       
    let groupedArrays = [];

    // loop through the data Array in steps defined by the groupSize 
    for (let i = 0; i < data.length; i += groupSize) {

        // generates a new array containing the values found in the data Array between the current 'i' position and i + groupSize
        // assigns the array to the groupedValues array
        const groupedValues = data.slice(i, i + groupSize)
            
        // push the groupedValues onto the groupedArrays array
        groupedArrays.push(groupedValues)
    }

    return groupedArrays;
}

module.exports = {
    groupArrayElements
}