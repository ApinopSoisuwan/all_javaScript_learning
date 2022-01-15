function myReplace(str, before, after) {
    let index = str.indexOf(before)
    if (str[index] === str[index].toUpperCase()){
      after = after.replace(after[0],after[0].toUpperCase())}
    else{
      after  = after.charAt(0).toLowerCase() + after.slice(1)
      }
    return str.replace(before,after)
    
  }
  
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"))
//should return the string Let us go to the mall
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
//should return the string He is Sitting on the couch