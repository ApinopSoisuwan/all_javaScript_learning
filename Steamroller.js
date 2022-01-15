function steamrollArray(arr) {
    let v = []
    for (i in arr){
        if (Array.isArray(arr[i])){
            v = v.concat(steamrollArray(arr[i]))
        }else{
            v.push(arr[i])
        }
    }return v
}
console.log(steamrollArray([1, [2], [3, [[4]]]]))