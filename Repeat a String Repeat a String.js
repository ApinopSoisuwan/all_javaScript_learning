function repeatStringNumTimes(str, num) {
    let c = ''
    for (let i = num; i > 0; i--){
        c += str
    }
    return c
}
  
console.log(repeatStringNumTimes("abc", 3));