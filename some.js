module.exports = {
  anyGreaterThan10 : anyGreaterThan10,
  longWord : longWord,
  truePossibilities : truePossibilities,
  lostCarcosa : lostCarcosa
};

// Check to see if any of the elements in the
// array are numbers greater than 10.

function anyGreaterThan10 (input) {
  return input.some(function(input){
    return input > 10;
  });
};

// Check to see if any of the strings in
// the array is longer than 10 characters.

function longWord (input) {
  return input;
};

// Check to see if any of the elements in
// the matrix are true.

function truePossibilities (input) {
  return input;
};

// Check to see if 'Lost' is in
// the phrase (using some).

function lostCarcosa (input) {
  return input;
};
