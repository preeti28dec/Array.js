// Add an item to the end of an Array
var fruits = ['Apple', 'Banana']
fruits.push('Orange')
console.log (fruits)
// output ["Apple", "Banana", "Orange"]

// Remove an item from the end of an Array
var fruits = ['Apple', 'Banana', 'Orange']
fruits.pop()
console.log(fruits)
// output ["Apple", "Banana"]

// Remove an item from the beginning of an Array
var fruits = ['Apple', 'Banana', 'orange']
fruits.shift()
console.log(fruits)
// output [‘Banana’, ‘orange’ ]

// Add an item to the beginning of an Array
var fruits = ['Apple', 'Banana']
fruits.unshift('Grapes')
console.log(fruits);
// output : [ 'Grapes', 'Apple', 'Banana' ]

// Find an index of an items the Array
let fruits = ['Apple', 'Banana', 'Orange']
let position = fruits.indexOf('Banana')
console.log(position);
//  output 1

// Remove an item by its index position
var fruits = ['Apple', 'Banana', 'Orange']
let removedItem = fruits.splice(1,1)
// output [‘Apple’, ‘Orange’]

// Accessing Array Elements
// JavaScript arrays are zero-indexed. The first element of an array is at index 0.
var arr = ['shweta', 'nayak', 'komal', 'zeba']
console.log(arr[0])              // output 'shweta' the first element
console.log(arr[1])              // logs 'nayak' the second element
console.log(arr[arr.length - 1]) // logs 'Zeba' the last element. 