const chai = require('chai');
const expect = chai.expect;
const { groupArrayElements } = require('../app/groupArrayElements');

describe('groupArrayElements', () => {

    it('should throw an error when an Array is not provided', () => {
        expect(() => groupArrayElements(undefined, 5)).to.throw(Error, 'An array is required');
    });

    it('should throw an error when a groupSize value is not provided', () => {
        expect(() => groupArrayElements([1,2,3,4,5,6,7,8,9], undefined)).to.throw(Error, 'An invalid groupSize value was provided');
    });

    it('should throw an error when an invalid groupSize value is provided', () => {
        expect(() => groupArrayElements([1,2,3,4,5,6,7,8,9], -1)).to.throw(Error, 'An invalid groupSize value was provided');
    });

    it('should throw an error when an invalid groupSize value is provided', () => {
        expect(() => groupArrayElements([1,2,3,4,5,6,7,8,9], 'a')).to.throw(Error, 'An invalid groupSize value was provided');
    });

    it('should return an empty Array when an Empty Array is provided ', () => {
        expect(groupArrayElements([], 10)).to.deep.equal([]);
    });

    it('should return a single nested Array containing all values when the groupSize value is larger than the array length', () => {
        expect(groupArrayElements([1,2,3,4,5,6,7,8,9,10], 20)).to.deep.equal([[1,2,3,4,5,6,7,8,9,10]]);
    });

    it('should return an Array of Arrays each of which containing 2 values', () => {
        expect(groupArrayElements([1,2,3,4,5,6,7,8], 2)).to.deep.equal([[1,2],[3,4],[5 ,6],[7,8]]);
    });

    it('should return an Array of Arrays each of which containing 2 values and the final array containing 1 value', () => {
        expect(groupArrayElements([1,2,3,4,5,6,7,8,9], 2)).to.deep.equal([[1,2],[3,4],[5 ,6],[7,8], [9]]);
    });

    it('should return an Array of Arrays each of which containing 4 values and the final array containing 3 values', () => {
        expect(groupArrayElements([1,2,3,4,5,6,7,8,9,10,11], 4)).to.deep.equal([[1,2,3,4],[5,6,7,8],[9,10,11]]);
    });
});