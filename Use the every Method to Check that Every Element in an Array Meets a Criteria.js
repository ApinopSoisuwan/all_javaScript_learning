function checkPositive(arr) {
    // Only change code below this line
    return arr.every(arr => arr >= 1)
  
    // Only change code above this line
  }
  
console.log(checkPositive([1, 2, 3, -4, 5]));