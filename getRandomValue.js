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
  const res = Math.ceil(minValue + ((Math.random() * 10000000) % (maxValue - minValue + 1)));
  return res;
};

module.exports = getRandomValue;
