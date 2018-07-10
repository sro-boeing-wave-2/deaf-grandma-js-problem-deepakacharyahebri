/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomValue = (minValue, maxValue) => {
  const res = Math.floor(Math.random() * (maxValue - minValue)) + minValue; 
  return res;
};

module.exports = getRandomValue;
