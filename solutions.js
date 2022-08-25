// Practice Problem =>>>>> 01

/* 1) Write an arrow function that will take 3 parameters, will multiply
the parameters and will return the result. */

const para3 = (p1,p2,p3) => p1*p2*p3;
console.log(para3(20,20,20));

/* 
  2) Write the following sentence in three lines and print the result:
    I am a web developer. I love to code. I love to eat biryani. 
*/

const line3 = `
I am a web developer
I love to code
I love to eat briyani
`
// console.log(line3);

const lineOne = 'I am a web developer';
const lineTwo = 'I love to code';
const lineThree = 'I love to eat briyani';

const threeLine = `
Line1 : ${lineOne} 
Line2: ${lineTwo} 
Line3: ${lineThree}
`
console.log(threeLine);

/* 3) Write an arrow function that will take 2 parameters: One parameter
will come from you and the other parameter will be a default
parameter. Add these two parameters and return the result. */


const getFullName = (first, last = 'Mridha') => first + ' ' + last;

const fullName = getFullName('Imran');
console.log(fullName);


// Practice Problem =>>>>> 02

/* 
  Write an arrow function where it will do the following:

      a) It will take an array where the array elements will be the
      name of your friends
      b) Check if the length of each element is even, push elements
      with even length to a new array and return the result

      Print the result.
 */

const friends = ['Joy', 'Rana', 'Kaium', 'Abed', 'Rahul','Arif'];
const evenArr = [];
const arrFriends = friends => {
  for(friend of friends){

    if(friend.length % 2 === 0){
      evenArr.push(friend); 
    }   
  }
  return evenArr;
}
console.log(arrFriends(friends));

// Practice Problem =>>>>> 03

/* 
  Write an arrow function where it will do the following:

    a) Square each array element
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of the squared elements

    Print the result. 
*/

const numbers = [2,4,6,5,3,8,20,12,17,15,25];
let sum = 0;
let avarage = 0;
const arrNumbers = numbers => {
  for(number of numbers){
    const numberSquare= Math.pow(number, 2 );
    sum = sum + numberSquare;
    avarage = sum / numbers.length;   
  }
  return avarage;
}
console.log(arrNumbers(numbers))

// Practice Problem =>>>>> 04

/*
 Write an arrow function where it will do the following:

  a) It will take two array inputs
  b) Combine the two arrays and assign them in a new array
  c) Find the maximum number from the new array and return the
  result

Print the result. */

const array1 = [20,30,40];
const array2 = [15,25,35];
let combine = [];

const maxArr = (array1,array2) => {
  const combineArr = [...array1, ...array2];
  combine.push(...combineArr)
  const maxNum = Math.max(...combine);
  return maxNum;
}
console.log(maxArr(array1,array2))
