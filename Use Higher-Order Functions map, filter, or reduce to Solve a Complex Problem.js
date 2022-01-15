const squareList = arr => {
    // Only change code below this line
    return arr.filter(function(arr){
        return (arr > 0 && arr % 1 == 0 )
    }).map(function(arr){
        return Math.pow(arr,2)
    })
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  console.log(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])) //should return [16, 1764, 36].
  console.log(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])) //should return [9, 100, 49].