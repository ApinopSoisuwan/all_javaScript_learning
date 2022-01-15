function uniteUnique(arr,...unique) {
    let mix = [].concat(...unique)
    for (let h = 0 ;h < mix.length ; h ++){
        if (arr.indexOf(mix[h]) == -1 ){
            arr.push(mix[h])
        }
    }


    return arr;
  }
  
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));