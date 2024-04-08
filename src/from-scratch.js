const addToFrontOrBack = (arr, value, isFront) => {
  if(isFront){
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (str) => {
  return str.split("").reverse().join("")
};

const newArrayFullOf = (value, numOfValue) => {
  const newArr = new Array(numOfValue).fill(value);
  return newArr;
};

const insertIntoMiddle = (arr,value) => {
  const mid = Math.floor(arr.length/2)
  arr.splice(mid,0,value);
};

const deleteFromMiddle = (arr) => {
  const mid = Math.floor(arr.length/2)
  arr.splice(mid,1);
};

const isRightIndex = (arr,value,index) => {
  return arr[index] === value 
};

const roundAllNumsDown = (arr) => {
  const copy = arr.map(val => Math.floor(val))
  return copy;
};

const getAllYCoordinates = (arrOfCoords) => {
  return arrOfCoords.map(arr => arr[1])
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
