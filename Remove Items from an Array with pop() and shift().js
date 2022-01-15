function popShift(arr) {
    let popped = arr.pop(arr); // Change this line
    let shifted= arr.shift(arr); // Change this line
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));