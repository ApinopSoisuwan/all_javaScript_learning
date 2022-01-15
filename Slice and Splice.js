function frankenSplice(arr1, arr2, n) {
    const u = []
    if (arr2 == ''){
        return arr1
    }
    for (let i in arr2){
        if (i == n){
            for (let c = 0 ; c < arr1.length ; c++){
            u.push(arr1[c])
        }
            u.push(arr2[i])}
        else {
            u.push(arr2[i])
        }
    } 
return u
}
  
console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1)); 
console.log(frankenSplice([1, 2, 3, 4], [], 0))