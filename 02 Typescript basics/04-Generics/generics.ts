// Generics are types which can hold/ use several types
// We're only touching the very basics here - you can go MUCH more into detail

// Consider the Array object

let numberArray: Array<number>; // This array will only accept numbers

// Try to initialize it with strings

// numberArray = ['test']; // => Error
numberArray = [1,2,3];