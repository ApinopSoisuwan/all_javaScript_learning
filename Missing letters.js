function fearNotLetter(str) {
    let letter = str.split('')
    for (let l = 0 ; l <letter.length ; l++){
            if (letter[l + 1].charCodeAt() - letter[l].charCodeAt()  != 1){
                return String.fromCharCode(letter[l + 1].charCodeAt() - 1);
            }else if (letter.indexOf('z') != -1){
                return 
            }
        }
  }
  
console.log(fearNotLetter("abce"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
console.log(fearNotLetter("bcdf"))
console.log(fearNotLetter("abcdefghjklmno"))
//console.log('z'.charCodeAt()) 
//console.log(String.fromCharCode(122))
//z = 122
//console.log('b'.charCodeAt() - 'a'.charCodeAt())
