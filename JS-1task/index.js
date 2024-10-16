// Find the largest number
let arr = [1, 3, 5, 7, 2];

let largestNumber = arr[0];

for (let i = 1; i < arr.length; i++) {
  if (arr[i] > largestNumber) {
    largestNumber = arr[i];
  }
}
console.log(largestNumber);

// Reverse the array
let reverseArray = [1, 2, 3, 4, 5];
let reversedArr = [];
for (let i = arr.length - 1; i >= 0; i--) {
  reversedArr.push(reverseArray[i]);
}
console.log(reversedArr);

// Sum the array
let sumArr = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < sumArr.length; i++) {
  sum += sumArr[i];
}
console.log(sum);

// Find the same numbers
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let commonNumbers = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[j]) {
      commonNumbers.push(arr1[i]);
    }
  }
}
console.log(commonNumbers);

// Function
function display(x, secondFunc) {
  const result = secondFunc(x);

  if (result > 50) {
    console.log("The price is high: $" + result);
  } else if (result > 20) {
    console.log("The price is moderate: $" + result);
  } else {
    console.log("The price is low: $" + result);
  }
}

function shefasebisFunc(price) {
  return price;
}

display(30, shefasebisFunc);
display(60, shefasebisFunc);
display(10, shefasebisFunc);
