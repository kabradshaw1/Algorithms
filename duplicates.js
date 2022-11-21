const numbers = [41, 24, 28, 1, 40, 41, 32, 33, 50, 5, 34, 5, 21, 21, 43, 43, 21, 4, 49, 24];

const mostDuplicates = (arr) => {
  let mostValue;
  let mostCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let counter = 0;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        counter++;
      }
    }

    if (counter > mostCount) {
      mostCount = counter;
      mostValue = arr[i];
    }
  }

  return `${mostValue} appeared ${mostCount} times.`;
};

console.log(mostDuplicates(numbers));

module.exports = { mostDuplicates };
// varible for currently compared number

// variable for the number of matchs

// for look that goes through the array and and saves each item in the array into the currently compared variable

// a nested for loop that compares the current number to the numbers in the numbers array and an if statement that adds 1
// to the current value to the numbers matched variable

// return statement that logs a message with the value in the second variable