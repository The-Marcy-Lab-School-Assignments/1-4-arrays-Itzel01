/* eslint-disable no-param-reassign */
const clearArr = (arr) => {
  arr.length = 0;
  return arr
};

const getFirstItem = (array) => {
  const arr = [...array];
  return arr.shift();
};

module.exports = {
  clearArr,
  getFirstItem,
};
