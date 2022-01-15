function diffArray(arr1, arr2) {
    const newArr = arr1.concat(arr2).filter(arr => !arr1.includes(arr) || !arr2.includes(arr))
    return newArr
    }
    

    

  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
  