const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(starting, ending) {
  let modifiedFood = [];
  for (var i = starting; i < ending-1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:
function isPrime(number) {
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}
function checkNumber(numberArray, operation) {
  let show = numberArray.filter(operation);
  return show;
}

// Progression 4:
function nonPrime(numberArray) {
  return reject(numberArray);
}
function reject(numberArray) {
  return numberArray.filter((number) => !isPrime(number));
}

// Progression 5:
const isEvenUsingLambda = isEven;

// Progression 6:
function double(num) {
  return num * num;
}
function findSquareOfNumbers(myArray) {
  let show = myArray.map(double);
  return show;
}
// Progression 7:
// function multiply(myArray) {
//   let change = myArray.map((digit, number) => {
//     return digit * number;
//   });
//   return change;
// }

function multiply(myArray){
  let change = myArray.reduce((accumulator,number)=>{
    return accumulator*number
  })
  return change
}

function sumOfSquares(myArray) {
  return myArray.map(double).reduce((digit, number) => {
    return digit + number;
  });
}
