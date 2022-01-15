function reverseString(str) {
  let o = ""
  var count = str.length
    for (i in str){  
      count --;
      o += str[count]
    }
    return o
  }
  
  console.log(reverseString("hello"));
