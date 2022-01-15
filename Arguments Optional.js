function addTogether() {
    const [a,b] = arguments;
    if (typeof(a) !== 'number'){
        return undefined
    }else if (b === undefined){
        return (b) => addTogether(a,b)
    }else if (typeof(b) !== 'number' ){
        return undefined
    }
    
    return a + b
}

function addTogetherZ() {
  const [first, second] = arguments;
  if (typeof(first) !== "number")
    return undefined;
  if (second === undefined)
    return (second) => addTogether(first, second);
  if (typeof(second) !== "number")
    return undefined;
  return first + second;
}



    
  
console.log(addTogether(2,3));
//console.log(addTogether((5),(7)));
console.log(addTogetherZ(5)(7))
console.log(addTogether(5)(7))