function sumAll(arr) {
    const count = arr.sort((a,b) =>  a - b)
    let l = count[0];
    let h = count[1];
    const p = [l]
    while(l < h){
        l++
        p.push(l)
    }
    return p.reduce((a,b) => a + b,0)
  }
  
console.log(sumAll([1, 4]));
//console.log(sumAll([5, 10])); // 5+6+7+8+9+10

