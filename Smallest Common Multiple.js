function smallestCommons(arr) {
    function find (m,min,max){ // solution
        for (let i = min ; i < max ; i++){
            if (m % i !== 0){
                return false;
            }
        }return true;
    }
    let max = Math.max(arr[0],arr[1]); 
    let min = Math.min(arr[0],arr[1]);
    let m = max 

    while (!find(m,min,max)){ // ! reverse boonlean 
        m += max
    }
    return m
}
  
console.log(smallestCommons([1,5]));