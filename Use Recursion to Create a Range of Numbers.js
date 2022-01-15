const c = []
function rangeOfNumbers(startNum, endNum) {
    if (endNum == startNum - 1){
        return endNum
    } else {
        const i = rangeOfNumbers(startNum + 1, endNum); 
        var p = endNum  ;
        c.unshift(startNum)
        return c
    }
  };

  function rangeOfNumbersz(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }

//console.log(rangeOfNumbers(6,9))

console.log(rangeOfNumbersz(6,9))