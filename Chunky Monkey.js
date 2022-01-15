function chunkArrayInGroups(arr, size) {
    let c = []
    let num = 0
    let countS = arr.length / size
    for (let i = 0 ; i < countS;i++){
        c.push([])}
    for (let o in arr){
        c[num].push(arr[o])
        if (c[num].length === size){
            num += 1
        }
    }return c
  }
  
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

