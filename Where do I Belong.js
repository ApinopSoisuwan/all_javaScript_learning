function getIndexToIns(arr, num) {
    let u = arr.sort((a,b) => a - b )
    console.log(u)
    let answer = 0
    for (let i in arr){
        if (arr[i] == num){
            return arr.indexOf(num);}
        else if (arr[i] < num && num > arr[i]){
            answer += 1
        }   
  }return answer;}
  
console.log(getIndexToIns([40, 60], 50));
console.log(getIndexToIns([3, 10, 5], 3));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([5, 3, 20, 3], 5))