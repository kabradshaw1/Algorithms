// This adds listeners to all buttons in container
// const containerEl = document.getElementById('container');

// const clickHandler = function(event) {
//   if (event.target.matches('button')) {
//     event.target.textContent = 'Clicked!';
//   }
// };

// containerEl.addEventListener('click', clickHandler);
// This adds listeners to all buttons
// const buttons = document.getElementsByTagName('button');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler());
// }
// 17.3.2 algorithm basic example
// const isEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };
// write an algorithm that console logs the index of a given number in an array
// const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

// const findIndex = (num) => {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i] === num) {
//       console.log(`${num} found at index ${i}`);
//     }
//   }
// };

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (num === arr[middle]) {
    return 'found it';
  }
  else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  }
  else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 38));