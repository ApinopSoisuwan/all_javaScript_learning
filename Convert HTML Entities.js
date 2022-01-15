function convertHTML(str) {
    let i = str.split('')
    
    for (let l = 0; l < i.length ; l++){
        switch (i[l]){
            case '<':
                i[l] = "&lt;";
                break;
            case '&':
                i[l] = "&amp;";
                break;
            case '>':
                i[l] = "&gt;";
                break;
            case '"':
                i[l] = "&quot;";
                break;
            case "'":
                i[l] = "&apos;";
                break;
        }
    }
    i = i.join('') //should return the string Sixty &gt; twelve.
    return i;
  }

console.log(convertHTML("Sixty > twelve"));
console.log(convertHTML("Dolce & Gabbana"));