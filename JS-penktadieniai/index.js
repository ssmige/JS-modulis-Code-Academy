// Find Maximum Value Create an array of numbers and write a JavaScript function to find the maximum value in that array using a loop and an if statement.

// const arr = [1, 6, -10, 5, 100, -6];
// let max = arr[0];
// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] > max) {
//     max = arr[index];
//   }
// }

// console.log(max);

//Filter Even Numbers Create an array of numbers and write a JavaScript function to filter out and return only the even numbers using a loop and an if statement. Kad prideti nauja elements prie array rašom arr.push(elementas)

const arr = [1, 26, 17, 28, 98, 101];
const evenNum = [];
for (let index = 0; index < arr.length; index++) {
  const num = arr[index];
  if (num % 2 === 0) {
    evenNum.push(num);
  }
}
console.log(evenNum);

// Sum of Array Write a function that takes an array of numbers as input and returns the sum of all the numbers using a loop
const arr1 = [15, 226, 17, 8, 78, 3];
let sum = 0;
for (let index = 0; index < arr1.length; index++) {
  sum += arr1[index];
}
console.log(sum);

// Array Reversal Write a function that takes an array as input and returns a new array with its elements reversed using a loop. Kad prideti nauja elements prie array rašom arr.push(elementas)

const arr2 = [25, 65, 88, 2, 6, 8, 338];

let reversedArr2 = [];
for (let index = arr2.length - 1; index >= 0; index--) {
  const num = arr2[index];
  reversedArr2.push(num);
}
console.log(reversedArr2);

// Array Uniqueness Write a function that takes an array as input and returns a new array with duplicate elements removed using a loop. naudojam arr.includes

const arr3 = [45, 68, 3, 10, 36, 45, 68, 3, 10, 36];
let uniqueArr = [];

for (let index = 0; index < arr3.length; index++) {
  if (uniqueArr.includes(arr3[index]) === false) {
    uniqueArr.push(arr3[index]);
  }
}

console.log(uniqueArr);

//Count Occurrences in Array Description: Create a function that takes an array of numbers and a target number as inputs. Use a loop to count and return the number of occurrences of the target number in the array.

//Replace all occurances in an array with a different number: example array [ 1, 5, 'a', 76, 'b', 'a'] replace all 'a' with number 5

const arr4 = [1, 5, "a", 76, "b", "a"];
let replacedArr = [];

for (let index = 0; index < arr4.length; index++) {
  const element = array[index];
}
console.log(replecedArr);
//Validate Email Addresses Description: Create a function that takes an array of email addresses as input. Use a loop to validate each email address and return an array containing only the valid ones. Valid email addresses should have the format "username@domain.com". patikrintinti ar stringe yra "@" ir "." čia bus ciklas cikle
