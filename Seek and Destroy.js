function destroyer(arr,...x) {
    for (let i in arr){
        for (let o in x){
            if (arr[i] === x[o]){
                delete arr[i]
            }
        }
    }return arr.filter(x => x != null)

}
  
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5))
