// String Manipulation Functions:

// Reverse a String: Write a function that reverses a given string.
function Reverse(string){
    return string.split('').reverse().join('')
}

console.log(Reverse("cursor"))

// // Count Characters: Create a function that counts the number of characters in a string.
function Count(num){
    return num.length 
}
console.log (Count("guru"))
// // Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
// // Array Functions:
function capitalizeWords(sentence) {
    // Split the sentence into words
    let words = sentence.split(" ");

    // Iterate through the words
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of the word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back into a sentence
    return words.join(" ");
}

// Example usage:
let sentence = "hello world, how are you?";
let capitalizedSentence = capitalizeWords(sentence);
console.log(capitalizedSentence); // Output: "Hello World, How Are You?"


// // Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMax(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.max(...arr);
}
var numbers = [51,13, 30, 1,27,12];

let max = findMax(numbers);
console.log("Maximum value:", max); 

function findMin(arr) {
    if (arr.length === 0) {
        return undefined; 
    }
    return Math.min(...arr);
}
var numbers = [51,13,30, 1,27,12];

let min = findMin(numbers);
console.log("Minimum value:", min);


// // Sum of Array: Create a function that calculates the sum of all elements in an array.
function Sumtotal(arr){
    sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum
}

console.log (Sumtotal([29,81,22]))
// // Filter Array: Implement a function that filters out elements from an array based on a given condition.
// // Mathematical Functions:
function filterArray(arr, condition) {
    
    return arr.filter(condition);
}

let numbers = [2, 8, 5, 10, 3, 1];

function condition(num) {
    return num <= 5; // Filter condition: keep numbers less than or equal to 5
}

let filteredNumbers = filterArray(numbers, condition);

console.log(filteredNumbers); 


// // Factorial: Write a function to calculate the factorial of a given number.
function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    
    // Initialize result to 1
    let result = 1;
    
    // Multiply numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
console.log (factorial(6))

// // Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(n) {
    // Check if n is less than or equal to 1
    if (n <= 1) {
        return false;
    }

    // Check for numbers 2 and 3 separately
    if (n <= 3) {
        return true;
    }

    // Check if n is divisible by 2 or 3
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }

    // Check for divisors from 5 to sqrt(n)
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }

    // If no divisors are found, then n is prime
    return true;
}
      
console.log(isPrime(13))
// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function generateFibonacci(numTerms) {
    // Initialize an array to store the Fibonacci sequence
    let fibonacciSequence = [];

    // Edge case for 0 terms requested
    if (numTerms <= 0) {
        return fibonacciSequence;
    }

    // First two Fibonacci numbers
    fibonacciSequence.push(0);
    if (numTerms > 1) {
        fibonacciSequence.push(1);
    }

    // Generate subsequent Fibonacci numbers
    for (let i = 2; i < numTerms; i++) {
        let nextFibonacci = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextFibonacci);
    }

    return fibonacciSequence
}
console.log(generateFibonacci(10))