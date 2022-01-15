function sumPrimes(num) {
    
    function prime (num) {
        for (let i = 2 ; i <= Math.sqrt(num); i++){
            if (num % i == 0){
                return false
            }
        }return true
    }
    let re  = 0
    for (let i = 2 ; i <= num ;i++){
        if (prime(i)){
            re += i
        }
    }
    return re
}
  
  
console.log(sumPrimes(977));
console.log(sumPrimes(10));
//console.log(sumPrimes(977));
