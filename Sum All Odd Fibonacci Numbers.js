function sumFibs(num) {
    let l = 0 
    let h = 1 
    var answer = 0 
    while (h <= num){
        if (h % 2 !== 0){
            answer += h
        }
        h += l
        l = (h - l)     
    }
    return answer
}
  
console.log(sumFibs(4));
