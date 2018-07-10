/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomRange = (minValue, maxValue) => Math.floor(Math.random() * (maxValue - minValue));
const getRandomValue = (minValue, maxValue) => getRandomRange(minValue, maxValue) + minValue;

module.exports = getRandomValue;
