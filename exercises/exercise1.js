// leave me alone :) :) :) <3 <3 <3

var constantNumber = 5;
var constantArray = [5, 7, 23, 4];
var constantObject = {
  "a": 5,
  "b": 2,
  "c": 8
};
// leave me alone :) :) :) <3 <3 <3

// const ourGlobalVar = {
//   constantNumber : 5,
//   constantArray : [5, 7, 23, 4],
//   constantObject : {
//     "a": 5,
//     "b": 2,
//     "c": 8
//   },
// };
// Refactor the following functions into pure functions:

var addOne = function (num) {
  return num + 1;
};


var timesTwo = function (num) {
  return num * 2;
};


var incrementArray = function (array) {
  return array.map(e =>{
    return e+1;
  })
}

var addNumberArray = function (array, number) {
  let newArray = [...array];
  newArray.push(number);
  return newArray;
};

var incrementObject = function (object) {
  // let newObj = Object.assign({},object);
  let newObj = {...object};
  Object.keys(newObj).forEach(function (x) {
    newObj[x] = newObj[x] + 1;
  });
  return newObj;
};

module.exports = {
  addOne,
  timesTwo,
  incrementArray,
  addNumberArray,
  incrementObject,
  constantNumber,
  constantArray,
  constantObject
}