//1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them.


// -Mutating Methods change the original array by adding, modifying elements contained in the array

// Mutating Array Methods:
// -push() - Adds one or more elements to the end of an array and returns the new length of the array.
// -pop() - Removes the last element from an array and returns that element.
// -splice() - Adds or removes elements from an array at a specified index and returns the removed elements.
// -sort() - Sorts the elements of an array in place and returns the sorted array.
// -reverse() - Reverses the order of the elements in an array in place and returns the reversed array.

// - Non - Mutating Array Methods do not change the original array and instead return a new aray or a new value.

// Non-Mutating Array Methods:

// -concat() - Joins two or more arrays and returns a new array that contains all the elements of the original arrays.
// -slice() - Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
// -map() - Creates a new array by calling a function for each element of an array and returns the resulting array.
// -filter() - Creates a new array with all elements that pass the test implemented by the provided function and returns the resulting array.
// -reduce() - Executes a reducer function on each element of an array, resulting in a single output value and returns the resulting value.


//2.  Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 

let languages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

// 1.Add ‘Kotlin’ to the end of the array
languages.push("Kotlin")
console.log(languages)

2.// Add 'Java' after 'Ruby'
languages.splice(3, 0, "Java")
console.log(languages);

// 3.Remove the first item in the array
languages.shift()
console.log(languages);

// 4. Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.unshift("Scala", "Swift")
console.log(languages);

// 5. Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5,1, "Go", "Rust")
console.log(languages);


// 3.What will be the value of fruit after calling the function changeFruit?

let fruit = ["apple", "mango", "banana"];
function changeFruit(fruit) {
  fruit[2] = "orange";
  return fruit;
}
// After calling the function changeFruit(fruit) the value of fruit will be 
["apple", "mango", "orange"];
// the function takes the array 'fruit' as an argument and modifies the thief element at index of '2', chnaging it from "banana" to 'orange'. The modified array "fruit" is returned by the function.

// 4.Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
function max(arr) {
    let maximum = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] > maximum) {
            maximum = arr[i]
        }
    }
    return maximum
}
console.log(max([4, 5, 10, -2]))

// 5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valTimesIndex(arr) {
    const timesIndex = arr.map(num => {
        return num * arr.indexOf(num)
    })
    return timesIndex
}

function valTimesInde(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}



console.log(valTimesIndex([1,2,3]))
console.log(valTimesInde([1,2,3]))
