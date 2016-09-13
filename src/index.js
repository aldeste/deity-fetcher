const dieties = require('./dieties.json');

/**
 * Generates a random number
 * @param  {Number} min Minimum value
 * @param  {Number} max Maximum value
 * @return {Number}     A random number between min and max
 */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Get a random value from an array
 * @param  {Array}  arr Array of values
 * @param  {Number} min Minimum key value
 * @param  {Number} max Maximum key value
 * @return              Random value from initial array
 */
function getRandomArrValue(arr, min = 1, max = arr.length) {
  return arr[getRandomInt(min, max)];
}

/**
 * Return all dieties
 * @param  {String} mythos If set, which dieties to return
 * @return {Array}  Array of all dieties or array of select dieties
 */
function all(mythos = 'all') {
  const mythosLowerCase = mythos.toLowerCase();

  return Object.keys(dieties)
  .filter(key => dieties[key].key === mythosLowerCase || mythosLowerCase === 'all')
  .map(key => dieties[key].dieties)
  .reduce((sum, arr) => sum.concat(arr), [])
}

/**
 * Returns a random diety or random dieties if number is set
 * @param  {Number}       number If set, returns an array of dieties
 * @return {String|Array}        Single diety or array of dieties
 */
function random(number = 1, mythos = 'all') {
  const arr = all(mythos);
  const l = arr.length - 1;

  if (1 > number) {
    throw Error(`Can't use numbers bellow 1, ${number} passed`);
  }

  if (number === 1) {
    return getRandomArrValue(arr);
  } else {
    return new Array(number)
      .fill()
      .map(() => getRandomArrValue(arr, 1, l));
  }
}

module.exports = {
  all,
  random
};
