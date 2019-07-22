/**
 * Stops execution of the program
 * @param {Number} ms - count of millisecond to pause execution
 * @return {Promise<any>}
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Returns random element from array
 * @param {Array} array
 */
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Asynchronous forEach function
 * @param {Array} array - array to iterate
 * @param {function} callback - callback for processing array items
 * @return {Promise<void>}
 */
async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

/**
 * Replaces placeholder (ex: ${daysCount}) by value from params object
 * @param {String} string - source line
 * @param {Object} params - values for substituting values in placeholders
 * @return {string}
 */
function compileString(string, params) {
  return string.replace(/\${(\w*)}/g, (str, p1) => params[p1]);
}

module.exports = {
  sleep,
  getRandomElement,
  asyncForEach,
  compileString
};
