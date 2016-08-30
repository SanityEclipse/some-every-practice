module.exports = {
  allEven : allEven,
  allSameType : allSameType,
  positiveMatrix : positiveMatrix,
  allSameVowels : allSameVowels
};

// Check to see if all elements in an array
// are even numbers.

function allEven (input) {
    return input.every(function(input){
      return input %2 === 0;
    })
}
// Check to see if all elements in an array
// are of the same type.

function allSameType (input) {
  return input.every(function(input){
  for (var i = 0; i <input.length; i++){
    return (input[i] === Number)
    }
  })
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix (input) {
  return input.every(function(input){
    return input[0] > 0;
  })
}


// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels (input) {
  return input;
};
