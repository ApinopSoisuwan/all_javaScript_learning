function pairElement(str) {
    let dna = str.split('')
    let arr = []
    for (let i = 0 ; i < dna.length ; i++){
        arr.push([])
    }
    for (let c = 0 ; c < arr.length ; c++){
        if (dna[c] === 'A'){
            arr[c].push('A','T')
        }else if (dna[c] === 'T'){
            arr[c].push('T','A')
        }else if (dna[c] === 'C'){
            arr[c].push('C','G')
        }else if (dna[c] === 'G'){
            arr[c].push('G','C')
        }
    
  }return arr ;}
  
console.log(pairElement("GCG"));
//  AT and CG